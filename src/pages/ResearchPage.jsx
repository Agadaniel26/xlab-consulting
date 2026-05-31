import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ResearchPage() {
  const [papers, setPapers]     = useState([])
  const [selected, setSelected] = useState(null)
  const [query, setQuery]       = useState('')
  const [searchParams]          = useSearchParams()

  useEffect(() => {
    fetch('/papers/index.json')
      .then(r => r.json())
      .then(data => {
        setPapers(data)
        const paramId = searchParams.get('paper')
        const match   = paramId ? data.find(p => p.id === paramId) : null
        setSelected(match || (data.length > 0 ? data[0] : null))
      })
      .catch(() => setPapers([]))
  }, [])

  const filtered = papers.filter(p => {
    const q = query.toLowerCase()
    return (
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q)) ||
      String(p.year).includes(q)
    )
  })

  const encodedSrc = selected
    ? '/papers/' + selected.file.split('/').map(encodeURIComponent).join('/')
    : null

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">Publications</div>
          <h1>Research</h1>
          <p>Browse and download XLab's research papers and publications.</p>
        </div>
      </div>

      <section className="research-viewer">
        <div className="container">
          <div className="research-layout">

            <aside className="research-list">
              <div className="research-search-wrap">
                <input
                  className="research-search"
                  type="search"
                  placeholder="Search papers…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>

              {filtered.length === 0 && (
                <p className="research-empty">
                  {papers.length === 0 ? 'No papers available yet.' : 'No results found.'}
                </p>
              )}

              {filtered.map(paper => (
                <button
                  key={paper.id}
                  className={`paper-item${selected?.id === paper.id ? ' active' : ''}`}
                  onClick={() => setSelected(paper)}
                >
                  <div className="paper-item-tags">
                    {(paper.tags || []).map(tag => (
                      <span key={tag} className="research-tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{paper.title}</h3>
                  <p className="research-meta">{paper.authors} · {paper.year}</p>
                  {paper.description && (
                    <p className="research-desc">{paper.description}</p>
                  )}
                </button>
              ))}
            </aside>

            <div className="research-preview">
              {selected ? (
                <>
                  <div className="research-preview-header">
                    <div>
                      <h2>{selected.title}</h2>
                      <p>{selected.authors} · {selected.year}</p>
                    </div>
                    <a
                      href={encodedSrc}
                      download={selected.file}
                      className="btn btn-filled"
                    >
                      Download PDF
                    </a>
                  </div>
                  <iframe
                    src={encodedSrc}
                    title={selected.title}
                    className="research-iframe"
                  />
                </>
              ) : (
                <div className="research-placeholder">
                  <p>Select a paper to preview it here.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

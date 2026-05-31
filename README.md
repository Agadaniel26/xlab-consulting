# XLab Consultancy — Website

React + Vite website for XLab Consultancy.

---

## Running the project

```bash
npm install
npm run dev
```

---

## Adding a new research paper

1. **Drop the PDF into** `public/papers/`
2. **Name the file carefully** — use only letters, numbers, hyphens, and underscores. No `&`, spaces, parentheses, or other special characters. Example: `My-New-Paper-2024.pdf`  
   > Files with special characters (spaces, `&`, `()`) cause Vite's dev server to serve the React app inside the iframe instead of the PDF — the same problem will appear in production with most static hosts.

3. **Add an entry to** `public/papers/index.json`:

```json
{
  "id": "unique-kebab-case-id",
  "title": "Full Paper Title",
  "authors": "Author One & Author Two",
  "year": 2024,
  "description": "One or two sentence summary shown in the sidebar and on the home page.",
  "file": "My-New-Paper-2024.pdf",
  "tags": ["Tag1", "Tag2"]
}
```

That's it — no code changes needed. The paper will appear automatically on the home page (capped at the first 3) and in the full research viewer at `/research`.

---

## Research page behaviour

- **Home page** shows the first 3 papers from `index.json` with a "See all papers →" link.
- Each home page card links directly to `/research?paper=<id>`, which opens that specific paper in the viewer.
- The `/research` page has a live search bar that filters by title, author, tag, or year.

---

## Contact form

Submissions are sent via **Web3Forms** (`https://api.web3forms.com/submit`) and delivered to `xlabconsultancy@gmail.com`.

- The access key is hardcoded in `src/pages/ContactPage.jsx` inside `handleSubmit`.
- If you ever need to change the destination email, generate a new key at [web3forms.com](https://web3forms.com) and replace the `access_key` value in that file.
- The form shows a loading state while submitting and displays an inline error message if the request fails.

---

## Project structure

```
src/
  pages/
    HomePage.jsx        # Hero, services, featured papers, clients, CTA
    AboutPage.jsx       # Who we are, founding story, values
    ServicesPage.jsx    # Three service blocks (Research, Advisory, Audit)
    ResearchPage.jsx    # Paper viewer with sidebar list + PDF iframe
    ContactPage.jsx     # Contact form (Web3Forms)
  components/
    Navbar.jsx          # Top navigation (Home, About, Services, Research + Get in Touch)
    Footer.jsx          # Footer with nav, services, contact columns
  App.jsx               # Routes and layout
  App.css               # All styles

public/
  papers/
    index.json          # Paper metadata — edit this to add/remove papers
    *.pdf               # PDF files
```

---

## Pages and routes

| Route        | Page            |
|--------------|-----------------|
| `/`          | Home            |
| `/about`     | About           |
| `/services`  | Services        |
| `/research`  | Research viewer |
| `/contact`   | Contact         |

import { getInstitution } from '../services/institutionService'

function HomePage() {
  const institution = getInstitution()

  return (
    <main className="container py-5">
      <h1 className="h2">{institution.name}</h1>
      <p className="lead">{institution.tagline}</p>
    </main>
  )
}

export default HomePage

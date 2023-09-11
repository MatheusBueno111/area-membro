import { useState } from 'react'

interface Curso {
  id: string
  title: string
  description: string
}

export function UseCurso() {
  const [cursos, setCursos] = useState<Curso[]>([])

  return { cursos, setCursos }
}

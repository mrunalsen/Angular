export interface resumeDetails {
    name: string,
    designation: string,
    email: string,
    contact: number,
    place: string,
    descriptipn: string,
    year: string,
    school: string,
    degree: string,
    score: string,
    skills: Skills[],
    experience:Experience[],
    education: Education[],
}
export interface Skills {
    skills: string
}
export interface Education {
    education: string
}
export interface Experience {
    experience: string
}
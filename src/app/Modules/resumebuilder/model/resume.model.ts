export interface resumeDetails {
    name: string,
    email: string,
    contact: number,
    skills: Skills[],
    experience:Experience[],
    education: Education[],
}
class Skills {
    skills: string
}
class Education {
    school: string
    degree: string
    score: string 
}
class Experience {
    designation: string
    place: string
    descriptipn: string
    year: string
}
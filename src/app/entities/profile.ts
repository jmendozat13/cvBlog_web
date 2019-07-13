export class Profile {
    id: string;
    fullName: string;
    urlImage: string;
    specialty: string;
    email: string;
    phoneNumber: string;
    objectives: string;
    constructor(id: string, fullName: string, urlImage: string, specialty: string, email: string, phoneNumber: string, objectives: string) {
        this.id = id;
        this.fullName = fullName;
        this.urlImage = urlImage;
        this.specialty = specialty;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.objectives = objectives;
    }
}

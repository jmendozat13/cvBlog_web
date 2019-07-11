export class Profile {
    fullName: string;
    urlImage: string;
    specialty: string;
    email: string;
    phoneNumber: string;
    objectives: string;
    constructor(fullName: string, urlImage: string, specialty: string, email: string, phoneNumber: string, objectives: string) {
        this.fullName = fullName;
        this.urlImage = urlImage;
        this.specialty = specialty;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.objectives = objectives;
    }
}

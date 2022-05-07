import { Courts } from "../entities/Courts";
export declare class CourtsService {
    private courtsRepository;
    getCourts(page: number, perPage: number): Promise<{
        result: Courts[];
        totalCount: number;
    }>;
    getMain(): Promise<{
        banner: Courts[];
        bestCourts: Courts[];
    }>;
    getCourtsDetail(id: number): Promise<{
        result: Courts;
    }>;
    getAllCourtsId(): Promise<{
        result: Courts[];
    }>;
    createCourts(name: string, introduction: string, city: string, address: string, phone: string, lat: number, lng: number, imgLength: number, reservation: string, reservationLink: string, numberOfCourts: string, isOnlineReservation: boolean, isParking: boolean, isIndoor: boolean, isOutDoor: boolean, courtType: string): Promise<void>;
}

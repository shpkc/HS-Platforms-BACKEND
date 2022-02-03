import { Courts } from "../entities/Courts";
export declare class CourtsService {
    private courtsRepository;
    getCourts(page: number, perPage: number): Promise<{
        data: Courts[];
        totalCount: number;
    }>;
    getCourtsDetail(id: number): Promise<{
        data: Courts;
    }>;
    createCourts(name: string, introduction: string, city: string, address: string, phone: string, lat: number, lng: number, imgLength: number, reservation: string, reservationLink: string, numberOfCourts: string, courtType: string): Promise<void>;
}

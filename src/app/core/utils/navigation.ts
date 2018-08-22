import { ActivatedRoute,Router } from "@angular/router";

export class Navigation {
    public static Navigate(link:string){
        let router:Router;
        router.navigate([link]);
    }
}

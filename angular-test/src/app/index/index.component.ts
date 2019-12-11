import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    btnClick= function () {
        this.router.navigateByUrl('/detail');
    };
    isValid = true;

   

latestNews : any;
slider1 = []
slider_right = []
cat_name =[]
add1 =[]
add2 =[]
internationalNews = []
politicalNews = []
crimeNews = []
specialRep = []
sportsNews = []
mediaNewsList = []
recentNews =[]
bnrimg = [
     {
         "url" : "http://www.gardencitycollege.edu",
         "img_src" : "assets\images\logo.png",
         "alt_txt" : "Garden City University"
     }
]
    router : any;
    constructor(private http: HttpClient, routerCtrl: Router) {
        this.router = routerCtrl;

     }
     gotodetailpage(refID)
     {
        //  alert(refID);
         let navigExtras: NavigationExtras = {
             queryParams: {
                 "ref_id" : refID
             }
         };
         this.router.navigate(["detail"], navigExtras);
     }
     gotocategory(catid)
     {
        // alert(catid);
        let navigExtras: NavigationExtras = {
            queryParams: {
                "cat_id" : catid
            }
        };
        this.router.navigate(["category"], navigExtras);
     }
    ngOnInit(){
        this.http.get('http://vinodavala.com/mobileapi/newsList').subscribe(res => {
            console.log(res);
            this.slider1 = res['response'].top_left;

        });
    }

}

export class DemoCarouseBasicComponent {
    showIndicators = false;
};

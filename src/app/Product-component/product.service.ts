import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products1 = {
    para1: 'Advanced Respiratory disease management',
    para2: 'Experience most advanced respiratory care management',
    para3: 'We have built an ecosystem to deliver most care to help patients with respiratory conditions.',
    para4: 'alveoMD for clinical',
    para5: 'alveofit for Homecare',
    para6: 'alveoConnect for Pophealth',
  };
  products2 = {
    para1: 'Digitize your pulmonary clinical practice and integrate with your existing EHR',
    para2: 'Explore alveoMD with alveoAir Spirometer >',
    img1: 'assets/img/products-1.webp',
  };
  products3 ={
    para1: 'Hassle free Software', 
    para1content: 'We have build most advanced solutions to equip your clinical practice with portable spirometry',
    para2: 'Compliant with latest ATS/ERS standard',
    para2content: 'alveoair® spirometry solutions are compliant with most latest standard and forget the headache of latest compliances.',
    para3: 'Streamlined patient management',
    para3content:'With the alveoair® digital spirometry solution experience the easiest way to screen, diagnose and manage. Tracking of unlimited patients is just a tap away.',
    para4: 'AL-ML supported technology Quality session',
    para4content: 'Our machine learning and artificial intelligent help you to find the errors in spirometry session and help patients to get the maximum efforts very easily',
    last1: 'Create an account',
    last2: 'Start working on projects >',
  }
  products4 ={
    img2: 'assets/img/products-2.webp',
    para1: 'Bring pocket size spirometer with clinical grade accuracy at home',
    para2: 'Get alveoair today',
    para3: 'Easy to use',
    para3content: 'We have made spirometry very easy with most advanced technology',
    para4: 'Know your control',
    para4content: 'Our AI assisted tech help you to know your control over the symptoms and push you to gain maximum control.',
    para5: 'Generate and share reports',
    para5content: 'You can share the spirometry reports with your care provider to help them delivery best care',
    para6: 'Your personal respi assistant',
    para6content: 'alveofit® app, is not just a health app. It become your care companion to gain maximum control over the symptoms.',
    last1: 'Download the app',
    last2: 'Start working on respiratory health >'
  }
  products5 ={
    para1: 'Expand Your Clinic, Expand Your Reach',
    para2: 'Know more about alveoConnect',
    img3: 'assets/img/products-3.webp',
    para3: 'Analytic Dashboards',
    para3content: 'alveoConnect® help to see the KPIs of your patient population',
    para4: 'Data Driven decisions',
    para4content: 'Understand the therapeutic response, disease progression at greater population level with meaningful insights',
    para5: 'Draw important indices',
    para5content: 'Understand the disease prevalence, followup matrix and deeper insights to deliver quality care',
    para6: 'Integrated solution',
    para6content: 'alveoConnect® is already integrated with alveoMD® application and fetch the data real time from the field.',
    last1: 'Login to alveoConnect'
  }
}

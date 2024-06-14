import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolutionHomeService {
  HealthContent = {
    imageUrl: 'assets/img/service-1.webp',
    alspiro: 'alveoair Sprirometer',
    spirocontent: 'State of handheld GOLD standard digital spirometer',
    alapp: 'alveofit applcation',
    appcontent: 'Comprehensive management of your health condition',
    heading1: 'Home health solutions',
    heading2: 'Make a Big Shift in your respiratory condition',
    description:
      'alveofit® ecosystem allows you to easily and effectively manage your asthma and COPD. With help of inbuilt intelligent machine learning system that understands your triggers, symptoms, medication usage patterns based on which it can provide relevant insights to help you control your asthma better anytime anywhere.',
    heading3: 'Know more about alveofit home health >',
  };

  ClinicalContent = {
    heading1: 'Clinical Practice Solution',
    heading2: 'Digitize your Clinical Practice with alveofit® Solutions',
    description:
      'With alveoair® spirometer and clinical solutions, experience the easiest way to do spirometry in the clinic. Register and track an unlimited number of patients with the tap of a button and delivery quality care',
    heading3: 'Start now with alveoMD care platform >',
    imageUrl: 'assets/img/service-2.webp',
    easy: 'Easy to Use',
    easycontent: 'Screen your patients effortlessly.',
    Advance: 'Advance options',
    Advancecontent: 'With alveofit platform explore unlimited possibilities.',
  };

  TeleSpirometryContent = {
    imageUrl: 'assets/img/service-3.webp',
    telespiro: 'Tele-spirometry',
    telecontent: 'Enable your patients to conduct spirometry from their home',
    secured: 'Secured connection',
    securedcontent:
      'All communication between patient and provider is highly secured.',
    heading1: 'Tele Spirometry',
    heading2: 'Enable tele-respiratory practice and monitor patients remotely',
    description:
      'alveofit® solutions provide wide range of digital IOT enabled platform to track your patients remotely and even conduct tele-spirometry with comprehensive care management solutions',
    heading3: 'Start working with tele-spirometry >',
  };
}

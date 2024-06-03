import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  
  Dev: string = "Sarawoot Somin"
  Dev_info: string = "PhD degree: Computational Modelling and Systems Biology, Faculty of Agriculture and Life Sciences, Lincoln University, New Zealand";

  Research_team: string = "Parul Tiwari 1,2, Piyush Bhardwaj 1,2, Sarawoot Somin 1,2, Wendy V. Parr 2 , Roland Harrison and Don Kulasiri 1,2,*";
  Dep1: string = "Affiliation 1: Centre for Advanced Computational Solutions (C-fACS), Lincoln University, Christchurch 7647, New Zealand"
  Dep2: string = "Affiliation 2: Department of Wine, Food and Molecular Biosciences, Lincoln University, Christchurch 7647, New Zealand"

  Cor: string = "Prof. Don Kulasiri; email: don.kulasiri@lincoln.ac.nz"

  content1: string = "This study develops a conceptual and mathematical framework to predict "+
  ".wine quality, and then validated these using a large dataset with machine learning approaches. It is "+
  "worth noting that the predicted wine quality indices are in good agreement with the wine experts  "+
  "perceived quality ratings We used sample data from Pinot noir wines from different regions of New Zealand to "+
  "develop a mathematical model that can predict wine quality, and applied dimensional analysis with "+
  "the Buckingham Pi theorem to determine the mathematical relationship among different chemical "+
  "and physiochemical compounds.";

  content2: string = "Eighteen commercial Pinot noir wines from five NZ regions were employed, the "+
  "same 18 wines in each of the two experiments (Table 1). Fifteen wines were from the "+
  "2016 vintage, and 3 from the 2013 vintage. Four producers had two wines each in the "+
  "18-wine sample set, and each of the other 10 wines was produced by a different company. "+
  "Wines were selected as representatives of the major Pinot noir producing areas of NZ. "+
  "As well, they spanned a range in terms of recommended retail price (RRP), price often "+
  "linked anecdotally with quality. The details of the 18 wines can be seen in Table 1, along "+
  "with several viniviticultural properties (e.g., wine region and method of production) that "+
  "were used as controlling factors, i.e., to ensure the representative nature of the sample of "+
  "wines selected. The viniviticultural factors were not treated as independent variables in "+
  "the present study for valid reasons (e.g., low and unequal numbers in some cells). The "+
  "two experiments were conducted 9 months apart so that the wines in Experiment 2 had "+
  "9 months more bottle age than the same wines employed in Experiment 1";

  table1: string = "assets/img/Table1.png";
  table1_description: string = "Table1. The 18 wines employed in the two experiments."

  content21: string = "In the conceptual framework of developing a mathematical model for quality indices "+
  "we focused on essential modulators by keeping in mind the complex nature of Pinot noir "+
  "wine (Figure 1). The selection of these parameters plays a vital role in making accurate predictions "+
  "about an individual wine’s quality, and requires careful study and technical knowledge "+
  "of the chemical quantities that exist in the wine bottle. The more abstract concepts of "+
  "wine balance, harmony of components, varietal typicality and so forth, are also major "+
  "drivers of a wine’s perceived quality. As well, the mouthfeel or trigeminal sensations of "+
  "astringency and softness are pivotal to the perceived quality (our sensory data demonstrate "+
  "this emphatically), as well as the tastes of sourness and bitterness. We have selected "+
  "modulators representing fruity, herbal, floral, woody, and other flavours, such as spicy ";

  fig1: string = "assets/img/fig1.png";
  fig1_description: string = "Figure 1. Flow chart for selecting essential modulators for mathematical development of the mode"

  content3: string = "In conclusion, we can say that the mathematical framework provides a solid scientific "+
  "background for model development. The use of machine learning approaches validated "+
  "this model and helped to speed up the computing process. Advanced machine learning algorithms provided an effective tool for understanding the complex nature of wine datasets, "+
  "and conveyed useful information related to wine quality. Based on the proposed approach, "+
  "we are developing a machine learning-based web application that wine researchers and "+
  "wine producers can use to forecast wine quality based on some specific features that are "+
  "present in their wines, and that can be tuned for different variable amounts. ";
}

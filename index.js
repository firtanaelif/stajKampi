var teams = ["  Trabzonspor  ", "  Antalyaspor  ", "   Sivasspor   ", "  Kayserispor  ",
    "  Alanyaspor   ", "   Bursaspor   ", "  Galatasaray  ", "  Malatyaspor  ", " Kasımpasaspor ",
    "  Erzurumspor  ", "    Göztepe    ", "  Akhisarspor  ", "  Ankaragücü   ", "  Fenerbahçe   ", "  Başaksehir   ",
    "   Konyaspor   ", "   Rizespor    ", "   Beşiktaş    "];

var guc=[6,8,4,5,4,5,2,6,4,5,3,1,3,7,4,2,5,8];

var galibiyet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var berabere=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maglubiyet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var averaj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var scor=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log("   EV-SAHİBİ  ^^^^^^  DEPLASMAN");

for(let firstTeam = 0; firstTeam < teams.length; firstTeam++) {
    for(let secondTeam = firstTeam + 1; secondTeam < teams.length; secondTeam++) {
        console.log(teams[firstTeam], "vs", teams[secondTeam])


        toplamGuc = guc[firstTeam] + guc[secondTeam];
        p1 = guc[firstTeam] / toplamGuc;
        p2 = guc[secondTeam] / toplamGuc;


        if (p1 > Math.random()) {
            galibiyet[firstTeam]++;
            maglubiyet[secondTeam]++;
        }
        else if (p2 > Math.random()) {
            galibiyet[secondTeam]++;
            maglubiyet[firstTeam]++;
        }
        else {
            berabere[firstTeam]++;
            berabere[secondTeam]++;
        }
    }
};

for(let firstTeam = 17; firstTeam >=0; firstTeam--) {
    for(let secondTeam =firstTeam - 1; secondTeam >= 0; secondTeam--) {
        console.log(teams[firstTeam], "vs", teams[secondTeam]);

        toplamGuc = guc[firstTeam] + guc[secondTeam];
        p1 = guc[firstTeam] / toplamGuc;
        p2 = guc[secondTeam] / toplamGuc;

        if (p1 > Math.random()) {
            galibiyet[firstTeam]++;
            maglubiyet[secondTeam]++;
        } else if (p2 > Math.random()) {
            galibiyet[secondTeam]++;
            maglubiyet[firstTeam]++;
        } else {
            berabere[firstTeam]++;
            berabere[secondTeam]++;
        }
    }
};

console.log("###   SON HAFTADAKİ PUAN DURUMU   ###");
for(let i = 0; i < teams.length; i++) {
    console.log(teams[i], "g:", galibiyet[i], "m:", maglubiyet[i], "b:", berabere[i],"puan:",scor[i]= (galibiyet[i]*3+berabere[i]));
};

console.log("###  Takımların Başarı Sıralaması  ###");

for(var i=0; i<18; i++)
{
    for(var j=0; j<18; j++)
    {
        if(scor[i]<scor[j])
        {
            tmp=scor[i];
            scor[i]=scor[j];
            scor[j]=tmp;

                        tmp=teams[i];
                        teams[i]=teams[j];
                        teams[j]=tmp;
                                    tmp=galibiyet[i];
                                    galibiyet[i]=galibiyet[j];
                                    galibiyet[j]=tmp;
            tmp=maglubiyet[i];
            maglubiyet[i]=maglubiyet[j];
            maglubiyet[j]=tmp;

                    tmp=berabere[i];
                    berabere[i]=berabere[j];
                    berabere[j]=tmp;
        }
    }
}
for(var i=17; i>=0; i--){
    console.log(17-i+1, teams[i],"G: ",galibiyet[i],  "M: ", maglubiyet[i], "AV: ", averaj[i]=galibiyet[i]-maglubiyet[i],"B:", berabere[i],"SCOR: ",scor[i],);
}


<script>
    const EuropaiUnio = [{
        orszag: "Ausztria",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
    csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
    csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
    }
    ]
    //1
    function HanyTagjaVan(vizsgaltTomb){
        let tagSzam=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
        tagSzam += 1;
    }
    return tagSzam;
}
    document.write("Az Europai Unionak "+HanyTagjaVan(EuropaiUnio).toLocaleString()+" tagja van.");
    //
    //2
    function elotti(vizsgaltTomb) {
        let csat2007el = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let csatlakozas = Number(EuropaiUnio[i].csatlakozas.split('.')[0]);
    if (csatlakozas < 2007) {
        csat2007el++;
        }
    }
    document.write("<br>2007 előtt " + csat2007el + " ország csatlakozott az Europai Uniohoz.");
}
        elotti(EuropaiUnio);
        //
        //3
        function Magyarorszag(vizsgaltTomb) {
            let csatlakozott = false;
        for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (EuropaiUnio[i].orszag === "Magyarország") {
            csatlakozott = true;
        }
    }
        return csatlakozott;
}
        if (Magyarorszag(EuropaiUnio)) {
            document.write("<br>Igen");
} else {
            document.write("<br>Nem");
}
        //
        //4

        //
        //5
        function utoljaraCsatlakozott(vizsgaltTomb){
            let utoljaraCsatlakozottIndex=0;
        for(let i=1;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].csatlakozas>vizsgaltTomb[utoljaraCsatlakozottIndex].csatlakozas){
            utoljaraCsatlakozottIndex = i;
        }
    }
        return utoljaraCsatlakozottIndex;
}
        let utoljaraCsatlakozottIndex=utoljaraCsatlakozott(EuropaiUnio);
        document.write("<br>A legutoljára csatlakozott ország: " +EuropaiUnio[utoljaraCsatlakozottIndex].orszag);
        //
        //6
        </script>

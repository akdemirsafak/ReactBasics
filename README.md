## React Basics

npx create-react-app first-project
node-modules directory yoksa package.json içerisindeki dependency'leri yüklemek için npm i dememiz yeterli.

app.js de veya react projelerinde bulunan div tag'leri aslında html elementi değil jsx'dir. İsimlendirmede farklılık yaratmamak için bildiklerimizden yola çıkabilmemiz adına yapılmıştır.

PWA => tarayıcıdan indirdiğimiz manifest.json bağlantılıdır.
* => manifest.json'dan icon'ları, name'ini vb.. belirleyebiliriz.
* => robots.txt seo içindir arama motorlarının gelip sitede nereleri taramasını istediğini belirlenir.



## State
React componentler içerisinde değişken kullanmak yerine state yapısını tercih eder.
Her component içerisinde kullanabileceğimiz local değişkenler yerine kullanabileceğimiz State kavramı vardır.
Virtual Dom yapısını daha efektif hale getirmek için State kullanmalıyız.

import {useState} from 'react';
şeklinde kullanabiliriz.

EsLint import işlerinde bize kolaylık sağlayabilir. Microsoft tarafından sunulur.

### State Kullanımı : 
const [stateAdi,setMyState]= useState("degiskenin İlk Değeri ayrıca null da olabilir."); => State'ler ReadOnly'dir.Direkt değer ataması yapılamaz. 
2. parametre olan setState fonksiyonuna parametre vererek değeri değiştiririz.

<input onChange={(val)=>setMyState(val.target.value)}/> bir kullanım örneğidir.val herhangi bir parametre adıdır özel bir anlam içermez.Value objenin tümünü verir.içerdiği değer harici alanlar da gelir.


### props

Componentlere değişkenler, objeler gönderebileceğimiz yapılardır.Parametre girilebilir.
 type gibi attribute'ler props olarak ele alınabilir.property'ler de readonly'dir. 
 gönderildiği componentlerde işlenemezler.


SelamVer.js içerisinde

    function SelamVer(props){
        return(
            <h1>Hello {props}</h1> Çıktısı Hello Kingsize'dır
        )
    }
    export default SelamVer; 


    <SelamVer ad="Kingsize"/>

    şeklinde kullanım yapılabilir.
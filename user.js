// ==UserScript==
// @name         Count Antiplagiat
// @namespace    dvgups.antiplagiat.ru
// @homepage     https://github.com/sx007/antiplagiat-user.js
// @date         2020-06-01
// @version      0.4.6
// @description  Для упрощения работы проверяющиму
// @author       sx007 (Хлибец Иван)
// @match        https://*.antiplagiat.ru/teacherCabinet
// @grant        GM_setClipboard
// @updateURL    https://github.com/sx007/antiplagiat-user.js/raw/master/user.js
// @downloadURL  https://github.com/sx007/antiplagiat-user.js/raw/master/user.js
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAALOklEQVR4XuWaCXxUxR3H39skXAUFpFBrUbGARwuUYqlCBVILVqXhqIoFgXAHks1ukj2SCLhCrk12s5vTyH0EsSJYAqXSIodH0IK2CLUqEShYakULaiNH2Pf8z7w3b/9vdnMukeyynw9k972ZefP/zm9m/v//G1G4xj/iNW6/EBTA/I11W0VZihNkQRBl+E/9B39OlE/v1AdDS1r5pczuk78iFMe/SRvKdbUdUhm1qVwPrIOfq92HL8HLN+W5cpU7f9A4fsB1ABZsvDxHEKRlSgf1xrNOlMV/R6uzYPm5RwyiuIkZ1HaNx4DFOW73oBUMBAfgEh3N8sntI3JqpKX9TSYKchX+VLNP+8Jkz4xPXH9elbZKT5NfoGTDYeTdrp9QWy0p74Bd0laX9+7x5Ldfzs9dhBuCUD6lvRhpxrM1iIy8xfw2HVhX0d3Udj+ADRepPMqe6CAmrvuawiib3ikipoIllYy6ILg8AMB0UAFQ/DM9gMTKC/RG2dSOYuJaAgC+owUvnLdLRfZgtHeIaEk+oMAo4QGoc75sWicxcU0tnehl8Z0jQwFI9hbjAar0gtKhnAKQ7BPX/J8WKp3RJTIAINlbk/5K1VBQ9nMOAJJ90uqvaKHSmddFBgAke2viWwqA8ns4AEj2SauIdycIpbMiBACSvXXBm9S2gmcCAPhlz9zb0tnXB1WAseyzeKC4uiTpu7r7yd7/ULrMXS1Ku0l3P95xvEPX9uJ55mlG1/l6uRx9P8ULbIrjQ9qG5+nbtbqpT75HrxXm/EjXXprtXc0NF32+OJdnyLZgizWWvXU+AQAKqLhXrwAs+6QVXyhTYE7XAABgvGZksbGndj/Zc/oiPLxdccr36TWT62NZlqW6YuvN7VinzLkn4JpsKsrsU5yy9NgYWGh2ehf+kJY3Z5+4Uay7dJq51Z4ld9DrqvGnYNR6F+b6AVDjJflVt2vQyJSU6u5RYofPsYeHQWDZWxP20wW+oGIYBwDJPmn5OQXA3G71rgHJxf+Vi5N7YQBysflGgyBSv5C4j6Ip/5RUZLtZAZJz3ANfzN7MPlqdlKU1BEiVd3E/LUhJWfw+cBGEwqUKAPKZO/dgp87dO9QW5v1YgWV7+84oOfo9d8EgrQzZ6mRJlt1FQwy8CrDsrQnVdIHPf3Y4B0CN6ojsk5adpZ0omdd0AKbCf8tFqXrJm5wn5SK7AsCcc5zOPe+TCMCSGkXuT/Xzy33R+4rcs+7UAejSrX2t2zlAUYX10AYwYjJzb8k1i/mdPeDijmIenk4BSPa2eW/QfuQv4wEg2RufPUs7UZLQvX4FFH0iF5u+p903uQEAN+fNef+Svem3KACyju2DPyO8C2/zK+Dpo0QBp72O/jexDqcu/KcCIPsuPYCu7Wrd+QPpNQhqpsCfSrd7sF8BnIenA4Bkb5tLAIAClv+CUwCSvbHifwqA+TfUDwAWPJC8HwDMeVKnyNpbMRiMJ7+9GbdqZcxZH8lszpMyZMHzOPrrnhFswSNToAsCQEcc3NvLktjN6x18jv6Gre6i7OtdUnLPxwFTAMneNud1BcCK+zgASPbGZz5XACzoUT8Az2mZLXjsgab8k1ReLJmBjacGZ9XsFiQhli10cOkoAOiPO5ya+Q/aBl7wKIDrY2q5OT8L2lmhtSXJPlfp0GjeePIby942+zUFwMoRegBY9sZystLDGpBYP4BgD2qr11TZSyD7KNusVxUAq0ZyAJDs2VbH7/Nt1cDG+uWI39PBsSb2AlXDzH10gXeu5gEg2RtLz9CtAu/zjT0kXO7bZ+yjCnCuGcUpAMk+ueRTWgjv8+FiYNA1AGQPA7rOuWrkdHv8XgXA2lgOgOrhEdkTJ4c0FDEAkOzt0/coANb9kgOAZE8BEAWgfR6TNeafjDfIwmrm5LB7sNdTN5PFAp7FfXW7CIkFul++oMYCsmC4dLmXyzVIFwukWg5JIniRLKbg3VuL8eBBSNkPYfE8ebZp9pu92kVLnxh8wnDn8mHVvAqw7O3TdtMF3rmeA4BlnwxODgWA9vlgWx1zcsg92ONpLMD2+RTq5Eh1XsftWixAnBxwV82enLuKTPYjD0SJwsvMvSVtpFkPnYHn9tAnMJVMDrnPkhk0mFHjeev8/Yfg90ACXZTEoABs0/cezl87agBpwz51N13f8irv1ysAy55Fdfw+j8mSwCbQybkN/HAWCwhiylMfSCyqAwfHQzhhDy/NfpiAhhcWA2kskGb5uxwTbeielzfwLHsWyeHx7i3x7Vk8z8qRrU6UgwPA/U5/4hU6uHkbfhUEgCp7iOwoJd631wEA354PbDyL9JIngQ0X1elCWhrRwQe5uDJ2b+mog4fHEpjs+SSkZfG8BgA8PFHwgQJGBk6BabtrnetiO5PBSZ+ySwHw3GgOAJI9CWzIPOF9ex2AbADABTb8nE+FwIZFdeDh7YM2RwSEtBALgIdHYwHi3gbOeQCgJjA1AODbs3heAwAenuiThsP+HggAyT598l8o9EAAajKDyJ4ENtSvt/ygXleYLHh8YEMjO9W3J8bzUV1q+hGZm/MyH9KSOmzOW40HfPDbgBc80nkS0rJ4XgNAtjpJDgoAy54CIArYOIZTAJI9SWbgwAaPPPvOBzbkOsx5Wo+9KcIhLZ3j9sMQssqjaBtQTpakmkL34H64fZa3ZzEFbzwpS3x7Fs+zunbY6qBOcABI9um/+7MC4PkH9ACw7E0FpxQAajIjGIBwuoZln/74Trq+5f7+1xwAJHsW1fH7fDgZjfuKZZ8x6WU6uLkvPMgBQLInmRxCCe/z4Wo86TeWfcZjf6ILfO4mHgCSfbBkRlgDQLLPeJQAAAW8+BCnADWZQWRPnBxSCO/z4QwAyz7jkR0KgM0PcwCQ7IMlMMMaAJJ9xm//qADYMlYPAMveDE4OKYQDG/ob/bsahyKadJ5I3WJZMKX0Wdl2iewzJm6nCZGcl3gASPamrJpJoiA+3/IDScoD2b8mdVztZHOh6w5TNWA8vEV5LO/FsZsyJ2yng5vzh99wCgiStw9n2dfX98zx2xQAW+M4AKrssXsbkQDGVSkAqsZxi2DWsQ8hC9EP5+0jEkDcVuIHfJCzbdwdxD5dsEPe1ZEFg4/qIgVEpmK8AMZrdusAmJfUXIZFJSrcV3v/4qtfjOluIMi+nG3jtRcoAeFuquNoHOSttuKozg9EafBqHHtt6mrfkPHQRlz29vG6MwT1xvtXU/Z86ro1+9I2AXCp67AHkJ6w/9a8intPNGaIPX7fG841I4fzqevG6oVy/1tRADmWAlvs4vyKYUvr6yykrndDmVjyxsY29RUXvHdIY6nrUAxsrG6rA7AkVE+Ah2zhc3h8xxyPvtDufMceF2GRvsW5fvRJmr0VpIl5G8a81JgRodxvdQDWedX0TQ+fwwvWafLSAlbxj5yV9/clWRySNnRuHB1w5icUg/m6rQ6AP5PTUOcbyt5eSaNxW60PgDuT0yCABrK34QsA3tjA+8AjBSvvo+/mGvrYJ+96HKZLJby0iLZP2vmuQZAHsOxtY3Vber9VFWCb+XoXwSB/GeWTe+auHnGmOZ3MmLDrBiGm7jPfhUvX5VeN+6o5dZtTtnUBzH7tLVjUhrIDSc3pGClLE5iSfCB380NDm1u3qeWvGAB2ApOln5qVDSK9VTNIfp/ffy1YXMLi+aYaWl+5KwLg2zaeQc7ZPj7k/ofcgC2hehGM0BJJEie6lg9rVaeFjWL62M0TogTDFjhzuCh7x4SsUFQQOgD17G2zk6AtkD0bedgp1CkjCNk7JoZkQ0iViQ3xcAavZ0yMdu6nSRngK2R8zNdfdHTsnUHP/7X0EzKAlj64rdS75gF8A7VvO9cJoTdpAAAAAElFTkSuQmCC
// ==/UserScript==

/*Полоса с описанием задания над таблицей*/
var elementPage = document.querySelector('.task-description');
/*Таблица со списком присланных работ*/
var listRabot = document.querySelector('.students-list');

/*Если находимся в кабинете Преподавателя*/
if(elementPage){
    /*Создаём и вставляем ссылку-кнопку Посчитать*/
    var block = document.querySelector('.task-description');
    var linkBut = document.createElement('A');
    linkBut.href = '#';
    linkBut.classList.add('mylink');
    linkBut.textContent = 'Посчитать';
    linkBut.title = "Посчитать количество человек и количество попыток";
    linkBut.onclick = countLog;
    linkBut.setAttribute("style", "display: block;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-top: 7px;margin-right: 15px;margin-bottom: 10px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    block.insertBefore(linkBut, block.children[0]);
}


/*Если находимся в кабинете Преподавателя и есть список работ*/
/*то добавляем дополнительные кнопки*/
if(listRabot){
    /*Таблица со списком присланных работ*/
    var needLook = document.querySelector('div.scroll-area');
    /*Заставка обновления данных*/
    var nowStyleLoad = document.querySelector('div.loading');
    /*Переменная по отслеживанию стиля в loading*/
    var styleLoad = '';

    /*Функция по созданию дополнительных кнопок*/
    function createBut(){
        var tableSt = Array.from(document.querySelectorAll('tr.student'));
        /*Разбираем каждую строку таблицы (элемент массива)*/
        for (var i = 0; i < tableSt.length; i++) {
            //Блок Отчётов / результатов
            var block = tableSt[i].querySelector('div.report');
            /*Создаем ссылку на копирование адреса почты*/

            //Проверяем блок с ФИО на наличие ссылки, где есть эл.почта
            var blockMail = "";
            if(tableSt[i].querySelector('div.name').getElementsByTagName('a').length != 0){
                blockMail = tableSt[i].querySelector('div.name > a').getAttribute("data-email");
            } else {
                blockMail = null;
            }

            var linkMail = document.createElement('A');
            linkMail.textContent = '@';
            linkMail.href = '#';
            linkMail.title = "Скопировать адрес эл.почты";
            linkMail.setAttribute('id' , blockMail);
            //Находим индекс и по нему получаем адрес эл.почты
            linkMail.addEventListener('click', (function(i) {
                return function() {
                    //Проверяем, есть ли адрес эл.почты
                    var eMail = "";
                    var infoMail = "";
                    if(tableSt[i].querySelector('div.name').getElementsByTagName('a').length != 0){
                        eMail = tableSt[i].querySelector('div.name > a').getAttribute("data-email");
                    } else {
                         eMail = null;
                    }
                    //Добавляем содержимое для буфера обмена
                    if (eMail != null) {
                        var tableStu = Array.from(document.querySelectorAll('tr.student'));
                        infoMail = tableStu[i].querySelector('div.name > a').getAttribute("data-email");
                    } else {
                        infoMail = "";
                    }
                    //Копируем в буфер обмена
                    GM_setClipboard(infoMail,"text");
                }
            })(i), false);

            /*Создаем ссылку на PDF*/

            /*Получаем в каждой строке таблицы значение data-docid*/
            /*чтобы потом добавить кнопку на экспорт PDF*/
            var elementPage = tableSt[i].getAttribute("data-docid");

            var linkPdf = document.createElement('A');
            linkPdf.href = '/report/export/'+elementPage+'?v=1&short=False';
            linkPdf.textContent = 'PDF';
            linkPdf.title = "Ссылка на экспорт отчёта";
            linkPdf.target = '_blank';

            /*Создаем ссылку на полный отчёт*/
            var linkRep = document.createElement('A');
            linkRep.href = '/report/full/'+elementPage+'?v=1';
            linkRep.textContent = 'Отчёт';
            linkRep.title = "Ссылка на полный отчёт";
            linkRep.target = '_blank';
            //Проверяем есть ли div с результатами проверки
            if(block != null){
                //Вставляем заготовленные кнопки перед Показать результаты
                block.children[0].innerHTML="Подробнее";
                block.children[0].target = "_blank";
                block.insertBefore(linkMail, block.children[0]);
                block.insertBefore(linkPdf, block.children[1]);
                block.insertBefore(linkRep, block.children[2]);
            }
        }
    }

    /*При загрузке страницы / обновлении*/
    /*создаем дополнительные кнопки*/
    if (!nowStyleLoad.style.display){
        createBut();
    }

    // Указываем настройки для observer
    const config = { attributes: true };
    // Вызываем функцию когда происходят изменения
    const callback = function(observer) {
        //console.log('Изменено');
        /*Смотрим на атрибуты Style*/
        if (nowStyleLoad.style.display == 'block'){
            styleLoad = 'block';
        }
        if (nowStyleLoad.style.display == 'none'){
            styleLoad = 'none';
        }
        /*Если выставлено None, тогда вызываем функцию создания кнопок*/
        if(styleLoad == 'none'){
            //console.log('Обновились без перезагрузки');
            createBut();
        }
    };
    // Создаем экземпляр наблюдения, связанный с функцией обратного вызова
    const observer = new MutationObserver(callback);
    // Начинает наблюдать за изменениями определенного блока
    observer.observe(nowStyleLoad, config);
}


/*Собираем содержимое ссылок*/
function getText(link){
    var text = "";
    for (var i = 0; i < link.childNodes.length; i++){
        var n = link.childNodes[i];
        if (n && n.nodeValue){
            text += n.nodeValue;
        }
    }
    return text;
}

/*Функция подсчёта*/
function countLog () {
    /*Считаем сколько юзеров/строк*/
    var CountDiv = document.querySelectorAll('.attempt').length;
    /*Подсчитываем количество попыток*/
    var linkTexts = Array.from(document.querySelectorAll('div.attempt > a'))
                .map(getText);
    var sum=0;
    for(var i=0;i<linkTexts.length;i++){
        sum = sum + parseInt(linkTexts[i]);
    }
    document.getElementsByClassName("breadcrumbs-inner")[0].innerHTML = "Учёток: <b>" + CountDiv + "</b>  |  Всего отправлено: <b>"+ sum +"</b>";
}

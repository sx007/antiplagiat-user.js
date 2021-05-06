// ==UserScript==
// @name         Count Antiplagiat
// @namespace    dvgups.antiplagiat.ru
// @homepage     https://github.com/sx007/antiplagiat-user.js
// @date         2021-05-06
// @version      0.5.6
// @description  Для упрощения работы проверяющиму
// @author       sx007 (Хлибец Иван)
// @match        https://*.antiplagiat.ru/teacherCabinet
// @match        https://*.antiplagiat.ru/report/full/*
// @grant        GM_setClipboard
// @updateURL    https://github.com/sx007/antiplagiat-user.js/raw/master/user.js
// @downloadURL  https://github.com/sx007/antiplagiat-user.js/raw/master/user.js
// @icon data:image/png;base64,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
// ==/UserScript==

/*Полоса с описанием задания над таблицей*/
var elementPage = document.querySelector('.task-description');
/*Таблица со списком присланных работ*/
var listRabot = document.querySelector('.students-list');

/*Если находимся в кабинете Преподавателя*/
if(elementPage){
    /*Создаём и вставляем ссылку-кнопку Посчитать*/
    var block = document.querySelector('.task-description');
    //Кнопка Посчитать
    var linkBut = document.createElement('A');
    linkBut.href = '#';
    linkBut.classList.add('btnCountWork');
    linkBut.setAttribute('id' , 'btnCountWork');
    linkBut.textContent = 'Посчитать';
    linkBut.title = "Посчитать количество человек и количество попыток";
    linkBut.onclick = CountJobAcc;
    linkBut.setAttribute("style", "display: block;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-top: 7px;margin-right: 15px;margin-bottom: 10px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    block.insertBefore(linkBut, block.children[0]);

    //Кнопка Обновить
    var linkButUpd = document.createElement('A');
    linkButUpd.href = '#';
    linkButUpd.classList.add('btnTaskUpd');
    linkButUpd.setAttribute('id' , 'btnTaskUpd');
    linkButUpd.textContent = 'Обновить';
    linkButUpd.title = "Обновить данные данного задания";
    linkButUpd.onclick = function(){
        //Получаем ID задания и курса
        //var tree = document.querySelector('div.tree-element-active');
        //var treeAid = tree.getAttribute("data-id");
        //var treeAc = tree.getAttribute("data-courseid");
        //console.log(treeAid, treeAc);
        //updateStudentsView(treeAid, treeAc, null, null, null, null, !0, !0);
        updateStudentsView(null, null, null, 100);
        return false;
    };
    linkButUpd.setAttribute("style", "display: block;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-top: 7px;margin-right: 5px;margin-bottom: 10px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    block.insertBefore(linkButUpd, block.children[0]);


    /*Создаём и вставляем ссылку-кнопку Проверить*/
    var btnTask = document.querySelector('.folder-header');
    //Кнопка Посчитать
    var linkButTask = document.createElement('A');
    linkButTask.href = '#';
    linkButTask.classList.add('btnTaskSearch');
    linkButTask.setAttribute('id' , 'btnTaskSearch');
    linkButTask.textContent = 'Проверить';
    linkButTask.title = "Проверить где есть присланные новые или непросмотренные работы";
    linkButTask.onclick = ShowId;
    linkButTask.setAttribute("style", "display: block;background-color: white;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-right: 5px;margin-top: 15px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    btnTask.prepend(linkButTask);
}

/*Полоса меню полного отчёта*/
var fullRepPage = document.querySelector('.main-inner');
var gradeRep = document.querySelector('.report-grade');
if(fullRepPage){
    //Проверяем наличие кнопки Оценить
    if(gradeRep){
        var titleDiv = document.querySelector('.title');
        //Функция эмуляции клика на пункт меню
        function grClick() {
            gradeRep.click();
        }
        //Кнопка Оценить
        var gradeBut = document.createElement('A');
        gradeBut.href = '#';
        gradeBut.textContent = 'Оценить';
        gradeBut.title = "Вызывает окно оценки работы";
        gradeBut.onclick = grClick;
        gradeBut.setAttribute("style", "display: block;background-color: white;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-right: 5px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
        titleDiv.insertBefore(gradeBut, titleDiv.children[0]);
    }
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

            /*Создаем ссылку на копирование ФИО*/
            var eMail = "";
            if(tableSt[i].querySelector('div.name').getElementsByTagName('a').length != 0){
                eMail = tableSt[i].querySelector('div.name > a').getAttribute("data-email");
            } else {
                eMail = null;
            }
            var linkFIO = document.createElement('A');
            linkFIO.textContent = '👤';
            linkFIO.href = '#';
            linkFIO.title = "Скопировать ФИО";
            linkFIO.setAttribute('id' , eMail);
            //Находим индекс и по нему получаем адрес эл.почты
            linkFIO.addEventListener('click', (function(i) {
                return function() {
                    //Проверяем, есть ли адрес эл.почты
                    var infoFIO = "";
                    var infoEMail = "";
                    if(tableSt[i].querySelector('div.name').getElementsByTagName('a').length != 0){
                        infoEMail = tableSt[i].querySelector('div.name > a').getAttribute("data-email");
                    } else {
                        infoEMail = null;
                    }
                    //Добавляем содержимое для буфера обмена
                    if (infoEMail != null) {
                        var tableStUs = Array.from(document.querySelectorAll('tr.student'));
                        infoFIO = tableStUs[i].querySelector('div.name > a').innerHTML;
                    } else {
                        infoFIO = "";
                    }
                    //Копируем в буфер обмена
                    GM_setClipboard(infoFIO,"text");
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
                block.insertBefore(linkFIO, block.children[1]);
                block.insertBefore(linkPdf, block.children[2]);
                block.insertBefore(linkRep, block.children[3]);
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
    return false;
}

/*Функция получения данных по id курса и задания*/
async function get(idT, idC) {
    let url = window.location.protocol + "//"+window.location.host+"/api/teacher/worksInTask?taskId="+idT+"&courseId="+idC+"&by=20&page=1&order=desc&orderBy=date&word=&grade=&updateGrades=true";
    //Получение данных из url
    let obj = await (await fetch(url, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })).json();
    var countNew = 0;
    var countNotReview = 0;
    var totalCount = "";
    //Смотрим статусы последних документов
    for (var i = 0; i < obj.Rows.length; i++){
        //Новый (отправленный)
        if (obj.Rows[i].Work.Status == "Postponed") {
            countNew = countNew + 1;
        }
        //Непросмотренный
        if (obj.Rows[i].Work.Status == "NotReviewed") {
            countNotReview = countNotReview + 1;
        }
    }
    //Если нечего проверять
    if (countNew == 0 && countNotReview == 0) {
        totalCount = "&nbsp;";
    }
    //Если есть новые и непросмотренные
    if (countNew > 0 && countNotReview > 0) {
        totalCount = countNew + countNotReview;
    }
    //Если новых нет, но есть непросмотренные
    if (countNew == 0 && countNotReview > 0) {
        totalCount = countNotReview;
    }
    //Если есть новые и нет непросмотренных
    if (countNew > 0 && countNotReview == 0) {
        totalCount = countNew;
    }
    return totalCount;
}

/*Функция по выводу количества присланных работ*/
function ShowId(){
    (async () => {
        //У кнопки Проверить меняем атрибуты на момент работы
        var btnTS = document.querySelector('a.btnTaskSearch');
        btnTS.setAttribute("style", "display: block;background-color: white;border: 1px solid #ff0000;width: min-content;padding: 5px 5px 5px 5px;margin-right: 5px;margin-top: 15px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;pointer-events: none;cursor: default;");
        //Определяем активную вкладку Курсы
        var tabList0 = Array.from(document.querySelectorAll('[aria-hidden="false"] > div.folder-list > div.other-folders > ul > li.level-0'));
        //Разбираем каждый уровень - 0
        for (var i = 0; i < tabList0.length; i++) {
            //Получаем ID курса
            var idlvl0 = tabList0[i].querySelector('div.tree-element').getAttribute("data-id");
            //Находим все задания
            var tabList1 = Array.from(tabList0[i].querySelectorAll('ul > li.level-1'));
            //Разбираем каждый уровень - 1
            for (var j = 0; j < tabList1.length; j++) {
                //Получаем ID задания
                var idlvl1 = tabList1[j].querySelector('div.tree-element').getAttribute("data-id");
                var taskJob;
                taskJob =  await get(idlvl1, idlvl0);
                //Проверяем на наличие дива с таким ID
                var divById =  document.getElementById(idlvl1);
                //Проверяем на наличие div с такими ID
                if (typeof(divById) != 'undefined' && divById != null)
                {
                    //Если есть, то обновляем содержимое
                    divById.innerHTML = taskJob;
                } else {
                    //Если нет, то создаём DIV и вставляем содержимое
                    var actTask = document.querySelector('[data-id="' + idlvl1 + '"][data-courseid="' + idlvl0 + '"]');
                    var countDiv = document.createElement('DIV');
                    countDiv.setAttribute('id' , idlvl1);
                    countDiv.setAttribute("style", "text-decoration: none;color: #ff0000;font-weight: 700;text-transform: uppercase;font-size: 10px;float: left;");
                    countDiv.innerHTML = taskJob;
                    actTask.prepend(countDiv);
                }
            }
        }
        //Возвращаем атрибуты после работы
        btnTS.setAttribute("style", "display: block;background-color: white;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-right: 5px;margin-top: 15px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    })()
    return false;
}

/*Функция получения данных по текущему id курса и задания*/
async function getCurent(idT, idC) {
    let url = window.location.protocol + "//"+window.location.host+"/api/teacher/worksInTask?taskId="+idT+"&courseId="+idC+"&by=100&page=1&order=desc&orderBy=date&word=&grade=&updateGrades=true";
    //Получение данных из url
    let obj = await (await fetch(url, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })).json();
    var totalAccount = 0;
    var totalJob = 0;
    var totalInfo = "";
    if (obj.Total > 0) {
        //Если есть присланные работы
        var numTotal = 0;
        for (var i = 0; i < obj.Rows.length; i++){
            //Получаем количество отправленных работ
            numTotal = numTotal + obj.Rows.[i].Work.AttemptNr;
        }
        totalJob = numTotal;
    }
    totalAccount = obj.Rows.length;
    totalInfo = "Учёток: <b>" + totalAccount + "</b>  |  Всего отправлено: <b>"+ totalJob +"</b>";
    return totalInfo;
}

/*Функция по выводу количества присланных работ*/
function CountJobAcc(){
    (async () => {
        //У кнопки Посчитать меняем атрибуты на момент работы
        var btnCn = document.querySelector('a.btnCountWork');
        btnCn.setAttribute("style", "display: block;border: 1px solid #ff0000;width: min-content;padding: 5px 5px 5px 5px;margin-top: 7px;margin-right: 15px;margin-bottom: 10px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;pointer-events: none;cursor: default;");
        //Определяем активное задание и курс
        var actCT = document.querySelector('[aria-hidden="false"] > div.folder-list > div.other-folders > ul > li.level-0 > ul >  li.level-1 > div.tree-element.tree-element-active');
        var aCur = actCT.getAttribute("data-courseid");
        var aTask = actCT.getAttribute("data-id");
        var aCT;
        aCT = await getCurent(aTask, aCur);
        document.getElementsByClassName("breadcrumbs-inner")[0].innerHTML = aCT;

        //Возвращаем атрибуты после работы
        btnCn.setAttribute("style", "display: block;border: 1px solid #c8d7e1;width: min-content;padding: 5px 5px 5px 5px;margin-top: 7px;margin-right: 15px;margin-bottom: 10px;text-decoration: none;color: #2e4453;font-weight: 700;text-transform: uppercase;font-size: 11px;float: left;-webkit-border-top-left-radius: 3px;-webkit-border-bottom-left-radius: 3px;-webkit-border-top-right-radius: 3px;-webkit-border-bottom-right-radius: 3px;-moz-border-radius-topleft: 3px;-moz-border-radius-bottomleft: 3px;-moz-border-radius-topright: 3px;-moz-border-radius-bottomright: 3px;border-top-left-radius: 3px;border-bottom-left-radius: 3px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;");
    })()
    return false;
}

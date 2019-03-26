<template>
    <div id="app">
        <v-app light>
            <v-content>
                <v-dialog
                        v-model="flag"
                        fullscreen
                >
                    <v-layout align-center justify-center row fill-height>
                        <v-flex xs12 md8>
                            <v-btn
                                    fixed
                                    dark
                                    fab
                                    top
                                    right
                                    @click="flag=false; items=[]"
                            >
                                <v-icon>clear</v-icon>
                            </v-btn>
                            <v-carousel hide-delimiters height="900px">
                                <v-carousel-item
                                        v-for="(item,i) in items"
                                        :key="i"
                                        :src="item.img"
                                ></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-layout>
                    <!--</v-container>-->
                </v-dialog>
                <section>
                    <v-parallax :src="host_name_img+'background.jpg'" height="600">
                        <v-layout
                                column
                                align-center
                                justify-center
                                class="white--text"
                        >
                            <h1 class="white--text mb-5 display-4 text-xs-center">ЛИДЕРЫ В ОБЛАСТИ<br> КАЧЕСТВЕННОГО<br>
                                СТРОИТЕЛЬСТВА</h1>
                            <!--<v-btn-->
                            <!--class="blue lighten-2 mt-5"-->
                            <!--dark-->
                            <!--large-->
                            <!--href="/pre-made-themes"-->
                            <!--&gt;-->
                            <!--Get Started-->
                            <!--</v-btn>-->
                        </v-layout>
                    </v-parallax>
                    <v-layout
                            column
                            wrap
                            class="my-5"
                            align-center
                    >
                        <v-flex xs12 sm4 class="my-3">
                            <div class="text-xs-center">
                                <h1 class="headline">УСЛУГИ</h1>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <v-container fluid>
                                <v-layout row wrap>

                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-img
                                                        src="https://st3.depositphotos.com/3591429/12974/i/950/depositphotos_129747972-stock-photo-architect-planning-construction-on-blueprint.jpg"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Планирование строительства</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Планирование в строительстве оказывает существенное влияние на процесс
                                                управления деятельностью строительных организаций.

                                                Планы подразделяют на комплексные и специализированные, перспективные и
                                                оперативные, стратегические и тактические,
                                                они могут быть локальными и глобальными. С помощью планирования решаются
                                                и выполняются важнейшие задачи деятельности организации.
                                                Так, планирование:

                                                • позволяет рационально использовать имеющиеся материально-технические и
                                                финансовые ресурсы;

                                                • помогает прогнозировать и эффективно использовать будущие
                                                благоприятные условия;

                                                • улучшает координацию между участниками инвестиционно-строительного
                                                процесса, подразделениями и службами предприятия;

                                                • повышает эффективность использования и экономической, и технической
                                                информации на планируемый период;

                                                • упрощает и систематизирует
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-img
                                                        src="http://st-rez.ru/wp-content/uploads/2018/06/1-1-21-690x465.jpg"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline">Проектирование</div>
                                            </v-card-title>
                                            <v-card-text>
                                                В зависимости от назначения объекта строительства используются разные
                                                технологии проектирования, равно как последовательность выполнения
                                                работ, которые во многих случаях одни и те же. В основном проектирование
                                                будет состоять из таких этапов:

                                                подготовка рабочей документации;

                                                проведение необходимых экспертиз;

                                                разработка проектной документации, которая подлежит утверждению;

                                                различные инженерные изыскания;

                                                сбор первоначальной документации.

                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-img
                                                        src="http://www.project-blog.ru/project-blog.ru/wp-content/uploads//2016/06/399493_copy-604x270.png"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Капитальное строительство</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Наша компания на рынке строительных услуг более восьми лет.

                                                Наши конкурентные преимущества — это достойное качество предоставляемых
                                                услуг, хорошая скорость производимых работ, компетенция специалистов,
                                                добросовестное отношение к делу и, что немаловажно, долгосрочные
                                                гарантии.

                                                Выбор качественных стройматериалов — одна из важнейших задач, которую
                                                решают специалисты ООО ПК«Сибирь». Прежде чем использовать материалы
                                                какого-либо производителя, обязательно проверяется их качество. Таким
                                                образом изучаются все конкурентные предложения и в итоге делается выбор
                                                в пользу лучшего.

                                                Работы выплняемые ООО ПК "Сибирь"

                                                Многоэтажное строительство жилых и коммерческих объектов

                                                Наружные и внутридомовые сети водоснабжения, отопления и канализации

                                                Сети электроснабжения

                                                Монтаж металлоконструкций

                                                Сборка резервуаров

                                                Технический надзор и строительный контроль объектов капитального
                                                строительства

                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </section>

                <section>
                    <v-layout row wrap justify-end>
                        <v-flex d-flex xs6 md5>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">О НАС</div>
                                </v-card-title>
                                <v-card-text>
                                    <!--<div class="align-end">-->
                                    Промышленная компания ООО "Сибирь" была основана в 2010 году, а суммарный опыт
                                    работы основной команды в отрасли промышленного строительства составляет 8 лет.
                                    Компания участвовала в таких крупных и известных проектах, как строительство ЖК
                                    "Якоби-Парк", Строительство детского сада на 240 мест в г. Свирск. Также выполнял
                                    работы на промышленных объектах месторождения "Гросс" Основными ценностями компании
                                    ООО ПК"Сибирь" являются сдача объекта точно в срок или раньше, а также неизменно
                                    высокое качество работ, закаленное решением строительных задач на Севере. Устройство
                                    фундамента – это историческое направление работы компании ООО ПК "Сибирь", потому мы
                                    четко знаем, что такое быть первыми на объекте, создавать основу дальнейшим успехам
                                    отдельных проектов или всего бизнеса.
                                    <!--</div>-->
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs6>
                            <v-parallax src="http://images.chistoprudov.ru/lj/city/msk_zaryadie/00.jpg" height="500">
                            </v-parallax>
                        </v-flex>
                    </v-layout>
                </section>
                <section>
                    <div>
                        <v-jumbotron :gradient="gradient" dark>
                            <v-container fill-height>
                                <v-layout align-center>
                                    <v-flex text-xs-center>
                                        <h3 class="display-3">
                                            <v-layout justify-center row fill-height>
                                                <v-flex xs12 md4>
                                                    <h1 class="white--text mb-5 display-4 text-xs-center">2010</h1>
                                                    <p mb-5 display-4 text-xs-center>Год основания</p>
                                                </v-flex>
                                                <v-flex xs12 md4>
                                                    <h1 class="white--text mb-5 display-4 text-xs-center">27</h1>
                                                    <p mb-5 display-4 text-xs-center>Завершенных проектов</p>
                                                </v-flex>
                                                <v-flex xs12 md4>
                                                    <h1 class="white--text mb-5 display-4 text-xs-center">108</h1>
                                                    <p mb-5 display-4 text-xs-center>Строительных подрядов</p>
                                                </v-flex>
                                                <v-flex xs12 md4>
                                                    <h1 class="white--text mb-5 display-4 text-xs-center">11</h1>
                                                    <p mb-5 display-4 text-xs-center>Полученных наград</p>
                                                </v-flex>
                                            </v-layout>
                                        </h3>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-jumbotron>
                    </div>
                </section>

                <section>
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex xs12 class="my-3">
                                <div class="text-xs-center">
                                    <h1 class="headline">ОБЪЕКТЫ</h1>
                                </div>
                            </v-flex>
                            <!--<v-flex xs12>-->
                            <v-carousel hide-delimiters :cycle="false" height="auto" light>
                                <v-carousel-item
                                >
                                    <!--<v-container grid-list-xl>-->
                                    <v-layout row wrap>
                                        <v-flex xs12 md4>
                                            <v-hover>
                                                <v-card
                                                        slot-scope="{ hover }"
                                                        :class="`elevation-${hover ? 12 : 2}`"
                                                        class="mx-auto"
                                                        v-on:click="mm(itemsArena)"
                                                >
                                                    <v-img
                                                            :aspect-ratio="16/9"
                                                            :src="host_name_img+'Led_arena/1.jpg'"
                                                    ></v-img>
                                                    <v-card-title primary-title class="layout justify-center">
                                                        <div class="headline">Новый Ледовый Дворец</div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Строительство объекта «Ледовая арена» ведется в Свердловском
                                                        районе города.
                                                        Ген. подрядчик - ООО «СДС-Строй», компания из Кемерово.
                                                        Инициатором строительства выступил губернатор Иркутской области
                                                        Сергей Левченко.
                                                        Идею поддержали на федеральном уровне, из федерального бюджета
                                                        будет выделено 4,9 млрд рублей.
                                                        Согласно проекту, в центре будут ледовая арена, конькобежные
                                                        дорожки и трибуны для зрителей,
                                                        предусмотрены два тренажерных зала, спортивный зал для игровых
                                                        видов спорта, хореографический зал для фигуристов,
                                                        беговой зал, конференц-зал, гостиница со SPA-центром и ряд
                                                        других помещений.
                                                        Ледовая арена будет трансформироваться в многофункциональную
                                                        спортивную площадку для игры в волейбол, баскетбол,
                                                        теннис, катания на роликовых коньках. Объект на 6 000 зрителей
                                                        со стоимостью более 6 млрд рублей.
                                                        Это будет новая веха в развитии всего иркутского спорта - без
                                                        сомнения.
                                                        На объекте запланировано проведение чемпионата мира по хоккею с
                                                        мячом в марте 2020 года.
                                                        Наша компания осуществила тоннелирование двух переходов под
                                                        автомобильной дорогой диаметрами 1000мм с прокладкой в них
                                                        трубопроводов диаметром 700мм.
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-hover>
                                                <v-card
                                                        slot-scope="{ hover }"
                                                        :class="`elevation-${hover ? 12 : 2}`"
                                                        class="mx-auto"
                                                        v-on:click="mm(itemsOchag)"
                                                >
                                                    <v-card-text class="text-xs-center">
                                                        <v-img
                                                                :src="host_name_img+'Ochag/4.jpg'"
                                                                :aspect-ratio="16/9"
                                                        ></v-img>
                                                    </v-card-text>
                                                    <v-card-title primary-title class="layout justify-center">
                                                        <div class="headline">Очаг. Внутриплощадные сети</div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Нашей компанией поставлены материалы и произведены
                                                        строительно-монтажные работы по устройству наружных сетей
                                                        теплоснабжения, водоснабжения и канализации для подключения
                                                        второй очереди строительства. Водопроводная сеть из
                                                        полиэтиленовых напорных труб диаметром 160мм ПЭ100 SDR17 с
                                                        изоляцией ППУ и греющим кабелем. Также на сети водопровода
                                                        установлены пожарные гидранты и запорная арматура. Сеть
                                                        канализации выполнена из гофрированных труб с двухслойной
                                                        стенкой. На сетях водоснабжения и канализации установлены
                                                        колодцы из сборных железобетонных элементов.

                                                        Для монтажа теплосети в проекте приняты стальные
                                                        трубыДу=75мм. Компенсация температурных удлинений
                                                        теплопроводов осуществляется компенсаторами и углами
                                                        поворота трассы. На тепловой сети, спускниках и воздушниках
                                                        предусмотрена установка стальной запорной арматуры на
                                                        давление 16 кгс/см, шаровые краны повышенной надежности. В
                                                        качестве теплоизоляции применены сборные скорлупы из
                                                        пенополиуретана.Каналы теплотрассы выполнены из сборных
                                                        железнобетонных конструкций.

                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                        <v-flex xs12 md4>
                                            <v-hover>
                                                <v-card
                                                        slot-scope="{ hover }"
                                                        :class="`elevation-${hover ? 12 : 2}`"
                                                        class="mx-auto"
                                                        v-on:click="mm(itemsGross)"
                                                >
                                                    <v-card-text class="text-xs-center">
                                                        <v-img
                                                                :src="host_name_img+'Gross/4.jpg'"
                                                                :aspect-ratio="16/9"
                                                        ></v-img>
                                                    </v-card-text>
                                                    <v-card-title primary-title class="layout justify-center">
                                                        <div class="headline text-xs-center">РХ Гросс</div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Участие в строительстве и поставке материалов для рудника
                                                        Гросс Новый золотодобывающий рудник «Гросс» в Якутии, запуск
                                                        которого намечен на вторую половину 2018 года, обеспечил в
                                                        2018 году около 800 рабочих мест и более 900 — на весь
                                                        период освоения нового месторождения, а это порядка 17 лет.
                                                        К строительству рудника «Гросс» приступили в начале 2016
                                                        года. В ходе двухлетнего периода строительства предприятие
                                                        создало более 300 временных рабочих мест. На данный момент
                                                        число постоянных рабочих, обеспечивающих операционную
                                                        деятельность «Гросса», составило 403 человека. Еще столько
                                                        же будут трудоустроены на рудник до конца этого года. Таким
                                                        образом, общая численность персонала на «Гроссе» составит
                                                        более 800 человек, из которых 171 человек (21%) –
                                                        инженерно-технические работники и 636 (79%) – рабочие.
                                                        Процессом укомплектования кадрами занимаются специалисты
                                                        службы персонала «Нерюнгри-Металлик» и компании Nordgold. В
                                                        строительство нового рудника вложено около 250 млн долларов
                                                        США. Реализовано, смонтировано и запущено в эксплуатацию
                                                        более 11км трубопроводов водоснабжения и канализации из
                                                        предизолированных труб в ППУ диаметрами от 50 до 630мм.
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                    </v-layout>
                                    <!--</v-container>-->

                                </v-carousel-item>
                                <v-carousel-item
                                >
                                    <!--<v-container grid-list-xl>-->
                                    <v-layout row wrap>
                                        <v-flex xs12 md6>
                                            <v-hover>
                                                <v-card
                                                        slot-scope="{ hover }"
                                                        :class="`elevation-${hover ? 12 : 2}`"
                                                        class="mx-auto"
                                                        v-on:click="mm(itemsSvirskSad)"
                                                >
                                                    <v-card-text class="text-xs-center">
                                                        <v-img
                                                                :src="host_name_img+'SadSvirsk/1.jpg'"
                                                                aspect-ratio="2.75"
                                                        ></v-img>
                                                    </v-card-text>
                                                    <v-card-title primary-title class="layout justify-center">
                                                        <div class="headline text-xs-center">Свирск. Детский сад
                                                        </div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Здание детского сада состоит из 4 двухэтажных блоков
                                                        площадью 4.1 тыс. кв. м. Промышленной Компанией Сибирь
                                                        проведены работы по монтажу фасада, устройство теплых полов
                                                        и установки ограждающих конструкций.
                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-hover>
                                                <v-card
                                                        slot-scope="{ hover }"
                                                        :class="`elevation-${hover ? 12 : 2}`"
                                                        class="mx-auto"
                                                        v-on:click="mm(itemsSvirsk)"
                                                >
                                                    <v-card-text class="text-xs-center">
                                                        <v-img
                                                                :src="host_name_img+'Svirsk/1.jpg'"
                                                                aspect-ratio="2.75"
                                                        ></v-img>
                                                    </v-card-text>
                                                    <v-card-title primary-title class="layout justify-center">
                                                        <div class="headline">Свирск. Теплотрасса</div>
                                                    </v-card-title>
                                                    <v-card-text>
                                                        Наша компания выполнила капитальный ремонт тепловых сетей в
                                                        г. Свирске по улице Ленина. Проектом предусмотрено замена
                                                        тепловых сетей Ду=400мм. В подземном канальном исполнении с
                                                        устройством изоляции из пенополиуретана. Общая протяженность
                                                        тепловой сети 480 м.

                                                        Для монтажа теплосети в проекте приняты стальные трубы.
                                                        Компенсация температурных удлинений теплопроводов
                                                        осуществляется компенсаторами и углами поворота трассы.

                                                        На тепловой сети, спускниках и воздушниках предусмотрена
                                                        установка стальной запорной арматуры на давление 16 кгс/см,
                                                        шаровые краны повышенной надежности.

                                                        В качестве теплоизоляции применены сборные скорлупы из
                                                        пенополиуретана.

                                                        Каналы теплотрассы выполнены из сборных железнобетонных
                                                        конструкций.

                                                    </v-card-text>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                    </v-layout>
                                    <!--</v-container>-->

                                </v-carousel-item>
                            </v-carousel>
                            <!--</v-flex>-->
                        </v-layout>
                    </v-container>
                </section>

                <v-container grid-list-xl>
                    <v-flex xs12 class="my-3">
                        <div class="text-xs-center">
                            <h1 class="headline">КЛИЕНТЫ</h1>
                        </div>
                    </v-flex>
                    <v-layout>
                        <v-flex xs12 md4>
                            <v-img
                                    :src="host_name_img+'arena.jpg'"
                                    :aspect-ratio="17/9"
                            >
                            </v-img>
                        </v-flex>

                        <v-flex xs12 md4>
                            <v-img :src="host_name_img+'nordgrad.jpg'">
                                <div class="fill-height bottom-gradient"></div>
                            </v-img>
                        </v-flex>

                        <v-flex xs12 md4>
                            <v-img :src="host_name_img+'ochag.jpg'">
                                <div class="fill-height repeating-gradient"></div>
                            </v-img>
                        </v-flex>
                    </v-layout>
                </v-container>

                <!--<section>-->
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center>
                        <v-flex xs12>
                            <div class="text-xs-center">
                                <h1 class="headline">КОНТАКТЫ</h1>
                            </div>
                        </v-flex>
                        <v-flex d-flex xs12>
                            <YundexMap/>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Центральный офис</div>
                                </v-card-title>
                                <v-card-text>
                                    С удовольствем ответим на все ваши вопросы по телефону +7 (395) 245-50-60. Или
                                    просто заполните форму ниже:
                                </v-card-text>
                            </v-card>
                            <form>
                                <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        label="Name"
                                        required
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                ></v-text-field>
                                <v-text-field
                                        v-model="email"
                                        :error-messages="emailErrors"
                                        label="E-mail"
                                        required
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                ></v-text-field>
                                <v-text-field
                                        v-model="subject"
                                        :error-messages="emailErrors"
                                        label="subject"
                                        required
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                ></v-text-field>
                                <v-textarea
                                        name="input-7-1"
                                        label="Default style"
                                        value=""
                                        hint="Hint text"
                                ></v-textarea>
                                <v-btn @click="submit">Отправить</v-btn>
                            </form>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Центральный офис</div>
                                </v-card-title>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>ул. Красноярская 11 А, офис 409</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title> г. Иркутск Россия</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Denis1370201@mail.ru</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Телефон: +89501370201</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                <!--</section>-->
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import SibHeader from "./SibHeader";
    import YundexMap from "./YundexMap";

    export default {
        name: "SibMain",
        components: {SibHeader, YundexMap},
        data: () => ({
            host_name_img: location.protocol + "//" + location.host + "/img/",
            images_path: '',
            num_img: 2,
            flag: false,
            gradient: 'to top, orange 72%, white',
            items: [],
            itemsGross:[
                {img:location.protocol + "//" + location.host + "/img/Gross/1.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Gross/2.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Gross/3.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Gross/4.jpg"}
            ],
            itemsArena:[
                {img:location.protocol + "//" + location.host + "/img/Led_arena/1.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Led_arena/2.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Led_arena/3.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Led_arena/4.jpg"}
            ],
            itemsOchag:[
                {img:location.protocol + "//" + location.host + "/img/Ochag/1.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Ochag/2.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Ochag/3.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Ochag/4.jpg"}
            ],
            itemsSvirskSad:[
                {img:location.protocol + "//" + location.host + "/img/SadSvirsk/1.jpg"},
                {img:location.protocol + "//" + location.host + "/img/SadSvirsk/2.jpg"}
            ],
            itemsSvirsk:[
                {img:location.protocol + "//" + location.host + "/img/Svirsk/1.jpg"},
                {img:location.protocol + "//" + location.host + "/img/Svirsk/2.jpg"}
            ]
        }),
        methods: {
            mm: function (items) {
                this.flag = true;
                this.items=items;
                // this.images_path = location.protocol + "//" + location.host + "/img/" + path_name + "/";
                // this.num_img = number_img;
            }
        }
    }
</script>

<style>
    #inspire {
        /*background-image: url('https://thumbs.gfycat.com/DelayedHatefulEquine-small.gif');*/
        /*background-color: gray;*/
        /*background-color: #c0ca33;*/
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        font-family: Arial, Helvetica, Verdana, sans-serif; /* Гарнитура шрифта */
        font-size: 150%; /* Размер текста */
        /*font-weight: lighter; !* Светлое начертание *!*/
    }
</style>
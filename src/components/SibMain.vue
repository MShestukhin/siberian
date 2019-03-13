<template>
    <div id="app">
        <v-app light>
            <v-toolbar class="white">
                <v-toolbar-title v-text="title"></v-toolbar-title>
            </v-toolbar>
            <v-content>
                <section>
                    <v-parallax src="http://images.chistoprudov.ru/lj/city/msk_zaryadie/00.jpg" height="600">
                        <v-layout
                                column
                                align-center
                                justify-center
                                class="white--text"
                        >
                            <h1 class="white--text mb-5 display-4 text-xs-center">ЛИДЕРЫ В ОБЛАСТИ КАЧЕСТВЕННОГО СТРОИТЕЛЬСТВА</h1>
                            <v-btn
                                    class="blue lighten-2 mt-5"
                                    dark
                                    large
                                    href="/pre-made-themes"
                            >
                                Get Started
                            </v-btn>
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
                                <h2 class="headline">Услуги</h2>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Планирование строительства</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Планирование в строительстве оказывает существенное влияние на процесс управления деятельностью строительных организаций.

                                                Планы подразделяют на комплексные и специализированные, перспективные и оперативные, стратегические и тактические, они могут быть локальными и глобальными. С помощью планирования решаются и выполняются важнейшие задачи деятельности организации. Так, планирование:

                                                • позволяет рационально использовать имеющиеся материально-технические и финансовые ресурсы;

                                                • помогает прогнозировать и эффективно использовать будущие благоприятные условия;

                                                • улучшает координацию между участниками инвестиционно-строительного процесса, подразделениями и службами предприятия;

                                                • повышает эффективность использования и экономической, и технической информации на планируемый период;

                                                • упрощает и систематизирует
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 md4>
                                        <v-card class="elevation-0 transparent">
                                            <v-card-text class="text-xs-center">
                                                <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline">Проектирование</div>
                                            </v-card-title>
                                            <v-card-text>
                                                В зависимости от назначения объекта строительства используются разные технологии проектирования, равно как последовательность выполнения работ, которые во многих случаях одни и те же. В основном проектирование будет состоять из таких этапов:

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
                                                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                                        aspect-ratio="2.75"
                                                ></v-img>
                                            </v-card-text>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline text-xs-center">Капитальное строительство</div>
                                            </v-card-title>
                                            <v-card-text>
                                                Наша компания на рынке строительных услуг более восьми лет.

                                                Наши конкурентные преимущества — это достойное качество предоставляемых услуг, хорошая скорость производимых работ, компетенция специалистов, добросовестное отношение к делу и, что немаловажно, долгосрочные гарантии.

                                                Выбор качественных стройматериалов — одна из важнейших задач, которую решают специалисты ООО ПК«Сибирь». Прежде чем использовать материалы какого-либо производителя, обязательно проверяется их качество.  Таким образом изучаются все конкурентные предложения и в итоге делается выбор в пользу лучшего.

                                                Работы выплняемые ООО ПК "Сибирь"

                                                Многоэтажное строительство жилых и коммерческих объектов

                                                Наружные и внутридомовые сети водоснабжения, отопления и канализации

                                                Сети электроснабжения

                                                Монтаж металлоконструкций

                                                Сборка резервуаров

                                                Технический надзор и строительный контроль объектов капитального строительства

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
                            <v-card class="elevation-0 transparent" >
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">О НАС</div>
                                </v-card-title>
                                <v-card-text >
                                    <!--<div class="align-end">-->
                                     Промышленная компания ООО  "Сибирь" была основана в 2010 году, а суммарный опыт работы основной команды в отрасли промышленного строительства составляет 8 лет. Компания участвовала в таких крупных и известных проектах, как строительство ЖК "Якоби-Парк", Строительство детского сада на 240 мест в г. Свирск.   Также выполнял работы на промышленных объектах месторождения "Гросс"  Основными ценностями компании ООО ПК"Сибирь" являются сдача объекта точно в срок или раньше, а также неизменно высокое качество работ, закаленное решением строительных задач на Севере. Устройство фундамента – это историческое направление работы компании ООО ПК "Сибирь", потому мы четко знаем, что такое быть первыми на объекте, создавать основу дальнейшим успехам отдельных проектов или всего бизнеса.
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
                                        <h3 class="display-3">Gradient</h3>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-jumbotron>
                    </div>
                </section>

                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Центральный офис</div>
                                    </v-card-title>
                                    <v-card-text>
                                        С удовольствем ответим на все ваши вопросы по телефону +7 (395) 245-50-60. Или просто заполните форму ниже:
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
                                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                            hint="Hint text"
                                    ></v-textarea>
                                    <v-btn @click="submit">Отправить</v-btn>
                                </form>
                            </v-flex>
                            <v-flex xs12 sm4 offset-sm1>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Центральный офис</div>
                                    </v-card-title>
                                    <v-list class="transparent">
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title>ул. Красноярская 11 А, офис 409   </v-list-tile-title>
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
                </section>

                <v-footer class="blue darken-2">
                    <v-layout row wrap align-center>
                        <v-flex xs12>
                            <div class="white--text ml-3">
                                Made with
                                <v-icon class="red--text">favorite</v-icon>
                                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-footer>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import SibHeader from "./SibHeader";

    export default {
        name: "SibMain",
        components: {SibHeader},
        data: () => ({
            gradient: 'to top, orange, white'
        }),
    }
</script>

<style>
    #inspire {
        background-image: url('https://thumbs.gfycat.com/DelayedHatefulEquine-small.gif');
        /*background-color: gray;*/
         background-color: #c0ca33;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        font-family: Arial, Helvetica, Verdana, sans-serif; /* Гарнитура шрифта */
        font-size: 150%; /* Размер текста */
        /*font-weight: lighter; !* Светлое начертание *!*/
    }
</style>
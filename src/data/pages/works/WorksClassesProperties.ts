import {WorksClassModel} from "../../../model/pages/works/WorksClassModel";
import {WorkModel} from "../../../model/pages/works/WorkModel";

class ReflexWorksClass implements WorksClassModel {
    title = "Язык Reflex"
    hash = "reflex"
    works: WorkModel[] = [
        {
            authors: "Бурдэ С. П., рук. Зюбин В. Е.",
            theme: "Разработка модуля генерации исполняемого кода для микроконтроллера ATmega по AST Reflex-программы",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 58 с."
        },
        {
            authors: "Стринадка К. А., рук. Зюбин В. Е.",
            theme: "Разработка IDE языков Reflex/IndustrialC для целей программирования встраиваемых систем на базе микроконтроллеров ATmega",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 56 с."
        },
        {
            authors: "Синицын Д. В, рук. Зюбин В. Е.",
            theme: "Разработка ядра облачного IDE процесс-ориентированного расширения языка Си",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2023, – 50 с."
        },
        {
            authors: "Бастрыкина А. А.",
            theme: "Рефакторинг транслятора языка Reflex на основе автоматической парсер-генерации, рук. Зюбин В. Е.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2020, – 53 с."
        }
    ]
}

class PostWorksClass implements WorksClassModel {
    title = "Язык poST"
    hash = "post"
    works: WorkModel[] = [
        {
            authors: "Башев В. И. , рук. Зюбин В. Е.",
            theme: "Ядро web-IDE процесс-ориентированного языка poST",
            published: "Выпускная квалификационная работа магистра, ФИТ НГУ, 2022, – 94 с.",
        }
    ];
}

class IndustrialCWorksClass implements WorksClassModel {
    title = "Язык IndustrialC"
    hash = "industrial-c"
    works: WorkModel[] = [
        {
            authors: "Розов А. С. , рук. Зюбин В. Е.",
            theme: "Разработка языковых и инструментальных средств процесс-ориентированного программирования для открытых микроконтроллерных платформ.",
            published: "Диссертация на соискание ученой степени кандидата технических наук, 2019, – 127 с."
        }
    ]
}

class RequirementsEngineeringAndEDTL implements WorksClassModel {
    title = "Инженерия требований и EDTL"
    hash = "requirements-engineering-and-edtl"
    works: WorkModel[] = [
        {
            authors: "Козлова, Анастасия Викторовна, рук. Гаранина Н. О.",
            theme: "Разработка парсера EDTL-требований в абстрактное синтаксическое дерево.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 56 с."
        },
        {
            authors: "Гнездилова, Анна Владимировна, рук. Гаранина Н. О.",
            theme: "Разработка алгоритма преобразования EDTL-спецификаций в требования на естественном языке.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 38 с."
        },
        {
            authors: "Гетманова, Анастасия Николаевна, рук. Гаранина Н. О.",
            theme: "Разработка генератора LTL-формул из списка EDTL-требований",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 37 с."
        }
    ]
}

class VerificationAndDebugPOPWorksClass implements WorksClassModel {
    title = "Верификация и отладка процесс-ориентированных программ"
    hash = "verification-and-debugging-of-process-oriented-programs"
    works: WorkModel[] = [
        {
            authors: "Ли К. А., рук. Зюбин В. Е.",
            theme: "Разработка модуля визуализации для облачного практикума по языку poST",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 60 с."
        },
        {
            authors: "Харченко А.Д., рук. Зюбин В. Е. ",
            theme: "Разработка интерфейса пользователя в облачном практикуме по языку poST",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 60 с."
        },
        {
            authors: "Масеевский А. М., рук. Зюбин В. Е.",
            theme: "Разработка веб-технологии виртуализации ПЛК средствами Python-интерпретатора для исполнения poST-программ",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2023, – 47 с."
        },
        {
            authors: "Черненко И. М., рук. Ануреев И. С.",
            theme: "Разработка генератора условий корректности poST-программ и стратегий их доказательства в системе Isabelle/HOL",
            published: "Выпускная квалификационная работа маристра, ФИТ НГУ, 2023, – 86 с."
        },
        {
            authors: "Родченко, Анна Сергеевна, рук. Зюбин В. Е.",
            theme: "Исследование подходов к разработке виртуальных лабораторных стендов в среде CoDeSys",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 59 с."
        },
        {
            authors: "Кондратьев, Илья Игоревич, рук. Гаранина Н. О.",
            theme: "Разработка транслятора языка poST в язык Promela для целей верификации методом проверки моделей",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 59 с."
        },
    ]
}

class StaticAnalysisOfProcessOrientedSpecifications implements WorksClassModel {
    title = "Статический анализ процесс-ориентированных спецификаций"
    hash = "static-analysis-of-process-oriented-specifications"
    works: WorkModel[] = [
        {
            authors: "Мартышкин Д. П., рук. Зюбин В. Е.",
            theme: "Исследование статических методов определения алгоритмической сложности программ на языке poST.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 86 с."
        },
        {
            authors: "Абраменко А. А., рук. Зюбин В. Е.",
            theme: "Разработка модуля визуализации структуры программ для webIDE языка poST.",
            published: "Выпускная квалификационная работа магистра, ФИТ НГУ, 2023, – 39 с."
        }
    ]
}

class WebideAndExtensionModules implements WorksClassModel {
    title = "webIDE и модули расширения"
    hash = "webide-and-extension-modules"
    works: WorkModel[] = [
        {
            authors: "Кузнецов Е. В., рук. Зюбин В. Е.",
            theme: "Разработка модуля управления проектами для облачного IDE языка Reflex.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2024, – 86 с."
        },
        {
            authors: "Витченко В. А., рук. Зюбин В. Е.",
            theme: "Унифицированная архитектура модуля расширения ядра Web-IDE процесс-ориентированного языка Reflex.",
            published: "Выпускная квалификационная работа магистра, ФИТ НГУ, 2022, – 33 с."
        },
        {
            authors: "Белоглазов, Даниил Александрович, рук. Зюбин В. Е.",
            theme: "Исследование унифицированных архитектур и механизмов расширения ядра Web-IDE процесс-ориентированного языка poST.",
            published: "Выпускная квалификационная работа бакалавра, ФИТ НГУ, 2022, – 66 с."
        },
        {
            authors: "Витченко В. А., рук. Зюбин В. Е.",
            theme: "РАЗРАБОТКА WYSIWYG РЕДАКТОРА ДЛЯ МОДУЛЯ ДИНАМИЧЕСКОЙ ВЕРИФИКАЦИИ ПРОЦЕСС-ОРИЕНТИРОВАННЫХ АЛГОРИТМОВ УПРАВЛЕНИЯ",
            published: "Выпускная квалификационная работа магистра, ФИТ НГУ, 2020, – 53 с."
        },
    ];
}

class SchedulingAndBalancingStrategies implements WorksClassModel {
    title = "Стратегии планирования и балансировки"
    hash = "scheduling-and-balancing-strategies"
    works: WorkModel[] = [
        {
            authors: "Пермяшкин Д. А., рук. Зюбин В. Е.",
            theme: "Исследование механизмов балансировки загрузки в процесс-ориентированных языках программирования.",
            published: "Выпускная квалификационная работа магистра, ФИТ НГУ, 2022, – 49 с."
        }
    ]
}

class DistributedMicrocontrollerSystems implements WorksClassModel {
    title = "Распределенные микроконтроллерные системы"
    hash = "distributed-microcontroller-systems"
    works: WorkModel[] = [
        {
            authors: "Святкина В.А., рук. Зюбин В. Е.",
            theme: "Разработка CAN-bus протокола прикладного уровня для создания распределённых микроконтроллерных систем управления.",
            published: "Выпускная квалификационная работа бакалавра, ФФ НГУ, 2024, – 16 с."
        },
        {
            authors: "Набиева М.А., рук. Зюбин В. Е.",
            theme: "Разработка микроконтроллерного модуля управления тиристорами для распределенной системы управления установкой анодного оксидирования.",
            published: "Выпускная квалификационная работа магистра, ФФ НГУ, 2024, – 56 с."
        }
    ]
}

export var WORKS_DATA: WorksClassModel[] = [
    new ReflexWorksClass(),
    new PostWorksClass(),
    new IndustrialCWorksClass(),
    new RequirementsEngineeringAndEDTL(),
    new VerificationAndDebugPOPWorksClass(),
    new StaticAnalysisOfProcessOrientedSpecifications(),
    new WebideAndExtensionModules(),
    new SchedulingAndBalancingStrategies(),
    new DistributedMicrocontrollerSystems()
]


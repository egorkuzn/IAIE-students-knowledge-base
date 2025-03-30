import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";

export class WorksFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            name: "Язык Reflex",
            link: "/works#reflex"
        },
        {
            name: "Язык Post",
            link: "/works#post"
        },
        {
            name: "Язык IndustrialC",
            link: "/works#industrial-c"
        },
        {
            name: "Инженерия требований и EDTL",
            link: "/works#requirements-engineering-and-edtl"
        },
        {
            name: "Верификация и отладка процесс-ориентированных программ",
            link: "/works#verification-and-debugging-of-process-oriented-programs"
        },
        {
            name: "Статический анализ процесс-ориентированных спецификаций",
            link: "/works#static-analysis-of-process-oriented-specifications"
        },
        {
            name: "webIDE и модули расширения",
            link: "/works#webide-and-extension-modules"
        },
        {
            name: "Стратегии планирования и балансировки",
            link: "/works#scheduling-and-balancing-strategies"
        },
        {
            name: "Распределенные микроконтроллерные системы",
            link: "/works#distributed-microcontroller-systems"
        }
    ]
}

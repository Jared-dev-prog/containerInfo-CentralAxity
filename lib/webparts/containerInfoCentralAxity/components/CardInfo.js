import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
var CardInfo = function (props) {
    var title = props.title, text = props.text, lengthCard = props.lengthCard;
    return (React.createElement("div", { className: "".concat(lengthCard, " ") },
        React.createElement("div", { className: "".concat(styles.background_card, " ").concat(styles.font_size, " shadow-sm") },
            React.createElement("h1", { className: styles.title }, title),
            React.createElement("p", { className: styles.text }, text))));
};
export default CardInfo;
//# sourceMappingURL=CardInfo.js.map
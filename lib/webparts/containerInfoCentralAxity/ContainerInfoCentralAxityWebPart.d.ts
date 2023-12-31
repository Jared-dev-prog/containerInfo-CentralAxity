import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { ICardInfoProps } from "./components/IContainerInfoCentralAxityProps";
export interface IContainerInfoCentralAxityWebPartProps {
    description: string;
    collectionData: ICardInfoProps[];
}
export default class ContainerInfoCentralAxityWebPart extends BaseClientSideWebPart<IContainerInfoCentralAxityWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    render(): void;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ContainerInfoCentralAxityWebPart.d.ts.map
export interface IContainerInfoCentralAxityProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  collectionData: ICardInfoProps[];
}

export interface ICardInfoProps {
  title: string;
  text: string;
  lengthCard: string;
  link?: string;
  typeOpen: string;
}

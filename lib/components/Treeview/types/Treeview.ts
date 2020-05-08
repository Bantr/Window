export interface ITreeview {
  rootItems: JSX.Element;
  child: ITreeviewChild | null;
}

export class ITreeviewChild {
  children: ITreeview;
}

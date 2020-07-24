export interface ITreeview {
  rootItems: React.ReactNode;
  child: ITreeviewChild | null;
}

export class ITreeviewChild {
  children: ITreeview;
}

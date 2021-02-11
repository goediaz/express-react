export interface IPart {
  title: string;
  features: IFeature[]
}

export interface IFeature {
  name: string,
  color: number,
  featureData: IFeatureData[]
}

export interface IFeatureData {
  control: string;
  dev: number;
  devOutTol: number;
  icon: number;
}
import { IPart, IFeature, IFeatureData } from './models/apiServiceModel'

export default class ApiService {

  public static async getData(updated = false):  Promise<IPart> {
    const url = updated ? '/api/update' : '/api/data';
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return {
      title: body.title,
      features: this.mapPartFeatures(body.data)
    }
  }
  
  private static mapPartFeatures(features: any): IFeature[] {
    return features.map((feature: any) => {
      return {
        name: feature.name,
        color: feature.headerStatus,
        featureData: this.mapFeatureData(feature.data)
      }
    })
  }

  private static mapFeatureData(featureData: any): IFeatureData[] {
    return featureData.map((data: any) => {
      return {
        control: data.control,
        dev: data.dev,
        devOutTol: data.devOutTol,
        icon: data.icon
      }
    })
  }
}
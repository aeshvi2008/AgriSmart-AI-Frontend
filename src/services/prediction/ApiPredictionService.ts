import { PredictionService } from './PredictionService';
import { PredictionResult } from '../../types/prediction';
import { predictionApi } from '../api/predictionApi';

export class ApiPredictionService implements PredictionService {
  async predict(imageFile: File | Blob, cropHint?: string): Promise<PredictionResult> {
    return predictionApi.predict(imageFile, cropHint);
  }

  async getPredictionById(predictionId: string): Promise<PredictionResult | null> {
    try {
      return await predictionApi.getPredictionById(predictionId);
    } catch {
      return null;
    }
  }
}

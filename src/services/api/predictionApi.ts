import { apiClient } from './client';
import { PredictionResult } from '../../types/prediction';

export const predictionApi = {
  predict: (file: File | Blob, cropHint?: string): Promise<PredictionResult> => {
    const formData = new FormData();
    formData.append('file', file);
    if (cropHint) {
      formData.append('crop_hint', cropHint);
    }
    return apiClient.postFormData<PredictionResult>('/predictions/analyze', formData);
  },

  getPredictionById: (predictionId: string): Promise<PredictionResult> => {
    return apiClient.get<PredictionResult>(`/predictions/${predictionId}`);
  }
};

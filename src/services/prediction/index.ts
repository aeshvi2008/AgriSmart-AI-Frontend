import { PredictionService } from './PredictionService';
import { MockPredictionService } from './MockPredictionService';
import { ApiPredictionService } from './ApiPredictionService';

const useMock = import.meta.env.VITE_USE_MOCK_API !== 'false';

export const predictionService: PredictionService = useMock
  ? new MockPredictionService()
  : new ApiPredictionService();

export * from './PredictionService';

import { createContext, useContext } from 'react';
import { SpeechService } from './service/SpeechService';

export const SpeechServiceContext = createContext<SpeechService>({} as SpeechService);

export function useSpeechService() {
  return useContext(SpeechServiceContext);
}
import {inject, ref, Ref} from "vue";
import { MathsSymbol } from '../constants';

export const useAppNumber = (): Ref<number> => {
    const number = inject(MathsSymbol, ref(0));

    return number;
}

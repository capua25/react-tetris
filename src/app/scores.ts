import { supabase } from "./database";

export const saveScore = async (name: string, score: number) => {
    try{
        const { data, error } = await supabase.from('highscores').insert([{name, score}]);
        if(error) throw error;
        return {
            success: true,
            data: data,
            error: null
        }
    }catch(error){
        return {
            success: false,
            data: null,
            error: error
        }
    }
}

export const getScores = async () => {
    try{
        const { data, error } = await supabase.from('highscores').select('*').order('score', { ascending: false }).limit(10);
        if(error) throw error;
        return {
            success: true,
            data: data,
            error: null
        }
    }catch(error){
        return {
            success: false,
            data: null,
            error: error
        }
    }
}
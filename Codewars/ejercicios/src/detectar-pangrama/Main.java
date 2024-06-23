public class Main {
    public static void main(String[] args) {
        isPangram("abcdefghijklmnopqrstuvxyz");
    }

    public static  boolean isPangram(String text){
        String alphabet ="abcdefghijklmnopqrstuvxyz";
        String[] alphabetArray = alphabet.split(" ");
        String textLowerCase = text.toLowerCase();

        for(String letter: alphabetArray){
            if(textLowerCase.indexOf(letter.toString()) == - 1){
                return false;
            }
        }

        return true;
    }
}
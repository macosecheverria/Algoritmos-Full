import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<Object> any = List.of("marcos", 1, 2, true, "echeverria", "juan", 3);

        System.out.println(filterList(any));

    }

    public static List<Object> filterList(List<Object> list) {
        List<Object> getNumbersOfList = list.stream().filter(el -> el instanceof Number).collect(Collectors.toList());

        return getNumbersOfList;
    }
}
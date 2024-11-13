/* Agora faz um programa que recebe dois inputs e retorna a soma desses números. */

import java.util.Scanner;

public class primeiro_arquivo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o primeiro número: ");
        int num1 = input.nextInt();
        System.out.println("Digite o segundo número: ");
        int num2 = input.nextInt();
        System.out.println("A soma dos números é: " + (num1 + num2));
    }
}
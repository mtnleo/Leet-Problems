/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
import java.math.BigInteger;

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        String l1_num = "";
        String l1_rev = "";
        String l2_num = "";
        String l2_rev = "";

        // GET THE VALUES TO STRINGS
        ListNode curr1 = l1;
        ListNode curr2 = l2;

        while (curr1 != null) {
            l1_num = l1_num.concat(String.valueOf(curr1.val));
            curr1 = curr1.next;
        }

        while (curr2 != null) {
            l2_num = l2_num.concat(String.valueOf(curr2.val));
            curr2 = curr2.next;
        }

        // REVERT STRING
        for (int i = l1_num.length() - 1; i >= 0; i -= 1) {
            l1_rev = l1_rev.concat(String.valueOf(l1_num.charAt(i)));
        }

        for (int j = l2_num.length() - 1; j >= 0; j -= 1) {
            l2_rev = l2_rev.concat(String.valueOf(l2_num.charAt(j)));
        }

        // ADDING UP
        BigInteger n1 = new BigInteger(l1_rev);
        BigInteger n2 = new BigInteger(l2_rev);
        String ans_rev = String.valueOf(n1.add(n2));
        String answer = "";

        // REVERTING STRING SUM
        for (int k = (ans_rev.length() - 1); k >= 0; k -= 1) {
            try {
                answer = answer.concat(String.valueOf(ans_rev.charAt(k)));
            }
            catch(Exception StringIndexOutOfBoundsException) {
                break;
            }
        }

        // MAKING IT A LIST
        ListNode l3 = new ListNode();
        ListNode current = l3;

        for (int k = 0; k < answer.length(); k++) {
            current.val = Character.getNumericValue(answer.charAt(k));

            if (k < answer.length() - 1) {
                current.next = new ListNode();
                current = current.next;
            }
            else {
                current.next = null;
            }
        }

        return l3;

    }
}
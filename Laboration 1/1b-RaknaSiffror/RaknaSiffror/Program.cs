using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaSiffror
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Mata in ett heltal: ");
            string input = Console.ReadLine();

            int zero = 0;
            int odd = 0;
            int even = 0;

            // Alternativ 1
            //foreach (char c in input)
            //{
            //    if (c == '0') { zero++; }
            //    if (c == '1') { odd++; }
            //    if (c == '3') { odd++; }
            //    if (c == '5') { odd++; }
            //    if (c == '7') { odd++; }
            //    if (c == '9') { odd++; }
            //    if (c == '2') { even++; }
            //    if (c == '4') { even++; }
            //    if (c == '6') { even++; }
            //    if (c == '8') { even++; }
            //}

            // Alternativ 2
            foreach (var num in input)
            {
                if (num == '0')
                {
                    zero++;
                }
                else if (num % 2 == 1)
                {
                    odd++;
                }
                else
                {
                    even++;
                }
            }
            Console.Write("Nollor: {0} Udda: {1} Jämna: {2}\n", zero, odd, even);
        }
    }
}
// Referenser:
// http://stackoverflow.com/questions/160930/how-do-i-check-if-an-integer-is-even-or-odd
// http://cc.davelozinski.com/c-sharp/fastest-way-to-check-if-a-number-is-odd-or-even

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaA
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Mata in en textrad: ");
            string input = Console.ReadLine();

            int countLower = 0;
            int countUpper = 0;

            foreach (char c in input)
            {
                if (c == 'a')
                {
                    countLower++;
                }
                if (c == 'A')
                {
                    countUpper++;
                }
            }
            Console.Write("Antal a: {0} Antal A: {1}\n", countLower, countUpper);
        }
    }
}
// Referenser:
// http://msdn.microsoft.com/en-us/library/x9h8tsay.aspx
// http://stackoverflow.com/questions/541954/how-would-you-count-occurrences-of-a-string-within-a-string
// http://stackoverflow.com/questions/541954/how-would-you-count-occurrences-of-a-string-within-a-string/541976#541976

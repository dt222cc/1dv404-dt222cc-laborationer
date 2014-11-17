using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Palindrom
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string input, reverse = "";

                Console.Write("Skriv en textrad: ");
                input = Console.ReadLine();

                if (input == "")
                {
                    Console.BackgroundColor = ConsoleColor.Red;
                    Console.WriteLine("Text raden är tom\n");
                    Console.ResetColor();
                }
                else if (input.Any(c => char.IsUpper(c)))
                {
                    Console.BackgroundColor = ConsoleColor.Red;
                    Console.WriteLine("Skriv in textraden enbart med små bokstäver.\n");
                    Console.ResetColor();
                }
                else
                {
                    for (int j = input.Length - 1; j >= 0; j--)
                    {
                        reverse += input[j].ToString();
                    }

                    if (reverse == input)
                    {
                        Console.ForegroundColor = ConsoleColor.Green;
                        Console.WriteLine("\"{0}\" är en palindrom.\n", input);
                        Console.ResetColor();
                        break;
                    }
                    else
                    {
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine("\"{0}\" är inte en palindrom.\n", input);
                        Console.ResetColor();
                    }
                } 
            }
        }
    }
}
// [Referenser]
// http://stackoverflow.com/questions/20032450/detect-if-a-string-contains-uppercase-characters
// http://www.c-sharpcorner.com/Blogs/13822/program-to-check-whether-a-string-palindrome-is-or-not.aspx

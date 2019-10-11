using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        CalcLogic Logic = new CalcLogic();

        public Form1()
        {
            InitializeComponent();

            RedrawDisplay();
        }

        void RedrawDisplay()
        {
            textBoxDisplay.Text = Logic.getResult();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("1");
            RedrawDisplay();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("2");
            RedrawDisplay();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("3");
            RedrawDisplay();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("4");
            RedrawDisplay();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("5");
            RedrawDisplay();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("6");
            RedrawDisplay();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("7");
            RedrawDisplay();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("8");
            RedrawDisplay();
        }

        private void button9_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("9");
            RedrawDisplay();
        }

        private void button0_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("0");
            RedrawDisplay();
        }

        private void buttonPlus_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("+");
            RedrawDisplay();
        }

        private void buttonMinus_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("-");
            RedrawDisplay();
        }

        private void buttonMultiply_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("*");
            RedrawDisplay();
        }

        private void buttonDivide_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit("/");
            RedrawDisplay();
        }

        private void buttonClear_Click(object sender, EventArgs e)
        {
            Logic.Clear();
            RedrawDisplay();
        }

        private void buttonDot_Click(object sender, EventArgs e)
        {
            Logic.EnterDigit(".");
            RedrawDisplay();

        }

        private void buttonEqual_Click(object sender, EventArgs e)
        {
            Logic.ExecuteOperation();
            RedrawDisplay();

        }
    }
    public class CalcLogic
    {
        string operation = "";
        string prevdigit = "";


        public string[] getOperands()
        {
            return operation.Split(new char[] { '+', '-', '*', '/' }, StringSplitOptions.None);
        }

        public string getResult()
        {
            string result = "";
            var operands = getOperands();

            if (operands.Length == 2)
            {
                if (operands[0] == "" && operands[1].Length > 0)
                    result = operation;
                else if (operands[1] == "")
                    result = operands[0];
                else
                    result = operands[1];
            }
            else if(operands.Length == 3)
            {
                if (!string.IsNullOrEmpty(operands[2]))
                    result = operands[2];
                else
                    result = operation.TrimEnd('+', '-', '*', '/');
            }
            else if (operands.Length == 1)
                result = operands[0];
            else
                result = "0";

            if (result == "")
                result = "0";

            return result;
        }

        public void ExecuteOperation()
        {

            var index = operation.LastIndexOfAny(new[] { '+', '-', '*', '/' });
            if (index == -1)
                return;

            var leftstring = operation.Substring(0, index);
            var rightstring = operation.Substring(index+1);
            var op = operation[index];

            double left = string.IsNullOrEmpty(leftstring) ? 0 : double.Parse(leftstring);
            double right = string.IsNullOrEmpty(rightstring) ? 0 : double.Parse(rightstring);

            if (op == '+')
                operation = (left + right).ToString();
            else if (op == '-')
                operation = (left - right).ToString();
            else if (op == '*')
                operation = (left * right).ToString();
            else if (op == '/')
            {
                if (right == 0)
                    operation = "0";
                else
                    operation = (left / right).ToString();

            }
                if (operation.Length > 9)
                    operation = operation.Substring(0, 9);

                operation = double.Parse(operation).ToString();
                prevdigit = "";

        }

        public void EnterDigit(string digit)
        {
            var operands = getOperands();

            var lastOperand = "";

            if (operands.Length > 0)
                lastOperand = operands.Last();

            if (digit == "+" || digit == "-" || digit == "*" || digit == "/")
            {
                if (operation.Contains('+') || operation.Contains('-') || operation.Contains('*') || operation.Contains('/'))
                {
                    ExecuteOperation();
                    operation += digit;
                    prevdigit = digit;
                    return;
                }

                if (operation == "")
                    operation = "0";
        
            }

            if (digit == "0" && lastOperand == "0")
                return; // блок не дає написати 0000

            if (digit == ".")
            {
                if (lastOperand.Contains('.'))
                    return;
                if(lastOperand == "")
                {
                    operation += "0";
                } // .7 = 0.7
                
            }

            if (!(digit == "+" || digit == "-" || digit == "*" || digit == "/")&&
                operands.Length > 0 &&
                !string.IsNullOrEmpty(operands.Last()) &&
                operands.Last().Length > 8)
                return;
            // не можна ввести більше 8 символів

            if (!(digit == "+" || digit == "-" || digit == "*" || digit == "/"))
            {

                if (prevdigit == "")
                    operation = "";
                else if (lastOperand == "0")
                    operation = operation.TrimEnd('0');
            }
                operation += digit;
                prevdigit = digit;
            
        }

        public void Clear()
        {
            operation = "";
        }
    }

    
}

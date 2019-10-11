using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WindowsFormsApp1;


namespace CalcTestProject
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestAddition()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("3");
            calc.EnterDigit("+");
            calc.EnterDigit("2");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "5");
        }

        [TestMethod]
        public void TestInputLengthLimit()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("8");
            calc.EnterDigit("9");
            calc.EnterDigit("0");

            Assert.AreEqual(calc.getResult(), "123456789");
        }

        [TestMethod]
        public void TestLengthLimitResult()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("/");
            calc.EnterDigit("3");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult().Length, 9);
        }

        [TestMethod]
        public void TestDot()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("6");
            calc.EnterDigit("+");
            calc.EnterDigit("9");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "10.7");
        }


        /*---------------Вычитание---------------*/
        [TestMethod]
        public void TestSubtraction1()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("0");
            calc.EnterDigit("-");
            calc.EnterDigit("6");
            calc.ExecuteOperation();

            Assert.AreEqual("4", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction2()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("5");
            calc.EnterDigit("-");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("15", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction3()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("-");
            calc.EnterDigit("8");
            calc.ExecuteOperation();

            Assert.AreEqual("-8", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction4()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("5");
            calc.EnterDigit(".");
            calc.EnterDigit("5");
            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.ExecuteOperation();
            Assert.AreEqual("2.5", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction5()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("4");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.ExecuteOperation();
            Assert.AreEqual("4.911", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction6()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("9");
            calc.EnterDigit("-");
            calc.EnterDigit("7");
            calc.ExecuteOperation();
            Assert.AreEqual("-16", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction7()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("8");
            calc.EnterDigit(".");
            calc.EnterDigit("4");
            calc.EnterDigit("-");
            calc.EnterDigit("9");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.ExecuteOperation();
            Assert.AreEqual("-17.7", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction8()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("-");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");

            calc.ExecuteOperation();
            Assert.AreEqual("-19998", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction9()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");

            calc.ExecuteOperation();
            Assert.AreEqual("-6466", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction10()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("4");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("9");
            calc.EnterDigit("-");
            calc.EnterDigit("5");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("3");
            calc.EnterDigit("4");

            calc.ExecuteOperation();
            Assert.AreEqual("-0.3435", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction11()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("2");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.EnterDigit("8");
            calc.EnterDigit("7");
            calc.EnterDigit("6");
            calc.EnterDigit("5");
            calc.EnterDigit("4");
            calc.EnterDigit("3");

            calc.ExecuteOperation();
            Assert.AreEqual("0.1358024", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction12()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("2");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("-");
            calc.EnterDigit("4");
            calc.EnterDigit("6");
            calc.EnterDigit(".");
            calc.EnterDigit("8");
            calc.EnterDigit("7");
            calc.EnterDigit("6");

            calc.ExecuteOperation();
            Assert.AreEqual("21184.247", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction13()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("7");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit(".");
            calc.EnterDigit("5");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("3");

            calc.ExecuteOperation();
            Assert.AreEqual("7122.245", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction14()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit(".");
            calc.EnterDigit("4");
            calc.EnterDigit("-");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("2");

            calc.ExecuteOperation();
            Assert.AreEqual("-234465.4", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction15()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit(".");
            calc.EnterDigit("7");
            calc.EnterDigit("7");
            calc.EnterDigit("7");
            calc.EnterDigit("-");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit(".");
            calc.EnterDigit("7");
            calc.EnterDigit("7");
            calc.EnterDigit("7");

            calc.ExecuteOperation();
            Assert.AreEqual("0", calc.getResult());
        }
        [TestMethod]

        public void TestSubtraction16()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("4");
            calc.EnterDigit("6");
            calc.EnterDigit("5");
            calc.EnterDigit("-");
            calc.EnterDigit("4");
            calc.EnterDigit("6");
            calc.EnterDigit("7");


            calc.ExecuteOperation();
            Assert.AreEqual("-932", calc.getResult());
        }
        [TestMethod]
        public void TestSubtraction17()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("-");
            calc.EnterDigit("0");

            calc.ExecuteOperation();
            Assert.AreEqual("0", calc.getResult());
        }
        /*---------------Сложение---------------*/

        [TestMethod]
        public void TestAddition1()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("0");
            calc.EnterDigit("+");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.ExecuteOperation();

            Assert.AreEqual("33", calc.getResult());
        }
        [TestMethod]
        public void TestAddition2()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("+");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.ExecuteOperation();

            Assert.AreEqual("45", calc.getResult());
        }
        [TestMethod]
        public void TestAddition3()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("+");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("67", calc.getResult());
        }
        [TestMethod]
        public void TestAddition4()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.EnterDigit("+");
            calc.EnterDigit("8");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.ExecuteOperation();

            Assert.AreEqual("10", calc.getResult());
        }
        [TestMethod]
        public void TestAddition5()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("2");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.EnterDigit("+");
            calc.EnterDigit("4");
            calc.EnterDigit(".");
            calc.EnterDigit("5");
            calc.ExecuteOperation();

            Assert.AreEqual("6.8", calc.getResult());
        }
        [TestMethod]
        public void TestAddition6()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("+");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());
        }
        [TestMethod]
        public void TestAddition7()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("+");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.ExecuteOperation();

            Assert.AreEqual("13", calc.getResult());
        }
        [TestMethod]
        public void TestAddition8()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("+");
            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.ExecuteOperation();

            Assert.AreEqual("-55", calc.getResult());
        }
        [TestMethod]
        public void TestAddition9()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("+");
            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.ExecuteOperation();

            Assert.AreEqual("-2.234567", calc.getResult());
        }
        [TestMethod]
        public void TestAddition10()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("+");
            calc.EnterDigit("1"); 

            calc.ExecuteOperation();
            Assert.AreEqual("2.234567", calc.getResult());
        }
        [TestMethod]
        public void TestAddition11()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit(".");
            calc.EnterDigit("0");
            calc.EnterDigit("0");
            calc.EnterDigit("0");
            calc.EnterDigit("0");
            calc.EnterDigit("0");
            calc.EnterDigit("0");
            calc.EnterDigit("1");
            calc.EnterDigit("+");
            calc.EnterDigit("1");
            calc.ExecuteOperation();

            Assert.AreEqual("1.0000001", calc.getResult());
        }


        /*---------------Умножение---------------*/

        [TestMethod]
        public void TestAdditionMulti1()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("15");
            calc.EnterDigit("*");
            calc.EnterDigit("10");
            calc.ExecuteOperation();

            Assert.AreEqual("150", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionMulti2()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("*");
            calc.EnterDigit("10");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionMulti3()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("10");
            calc.EnterDigit("*");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());
        }
        [TestMethod]
        public void TestAdditionMulti4()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.EnterDigit("*");
            calc.EnterDigit("8");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.ExecuteOperation();
            Assert.AreEqual("9.79", calc.getResult());
        }
        [TestMethod]
        public void TestAdditionMulti5()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("3");
            calc.EnterDigit(".");
            calc.EnterDigit("4");
            calc.EnterDigit("*");
            calc.EnterDigit("3");
            calc.EnterDigit(".");
            calc.EnterDigit("4");
            calc.ExecuteOperation();
            Assert.AreEqual("11.56", calc.getResult());
        }
        [TestMethod]
        public void TestAdditionMulti6()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("*");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.ExecuteOperation();
            Assert.AreEqual("-1440", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionMulti9()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("*");
            calc.EnterDigit("0");
            calc.ExecuteOperation();
            Assert.AreEqual("0", calc.getResult());
        }
        [TestMethod]
        public void TestAdditionMulti10()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.EnterDigit("*");
            calc.EnterDigit("0");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.ExecuteOperation();
            Assert.AreEqual("0.27", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionMulti11()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("8");
            calc.EnterDigit(".");
            calc.EnterDigit("9");
            calc.EnterDigit("*");
            calc.EnterDigit("0");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.ExecuteOperation();
            Assert.AreEqual("-2.67", calc.getResult());
        }

        /*---------------Деление---------------*/

        [TestMethod]
        public void TestAdditionDiv1()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("10");
            calc.EnterDigit("/");
            calc.EnterDigit("23");
            calc.ExecuteOperation();

            Assert.AreEqual("0.4347826", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionDiv2()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("/");
            calc.EnterDigit("45");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionDiv3()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("67");
            calc.EnterDigit("/");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());
        }
        public void TestAdditionDiv4()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("10");
            calc.EnterDigit("/");
            calc.EnterDigit("10");
            calc.ExecuteOperation();

            Assert.AreEqual("1", calc.getResult());

        }
        public void TestAdditionDiv5()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");
            calc.EnterDigit("/");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual("0", calc.getResult());

        }
        [TestMethod]
        public void TestAdditionDiv6()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("45");
            calc.EnterDigit(".");
            calc.EnterDigit("6");
            calc.EnterDigit("/");
            calc.EnterDigit("12");
            calc.EnterDigit(".");
            calc.EnterDigit("3");
            calc.ExecuteOperation();
            Assert.AreEqual("3.707317", calc.getResult());
        }

        [TestMethod]
        public void TestAdditionDiv8()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("3");
            calc.EnterDigit("2");
            calc.EnterDigit("/");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.ExecuteOperation();
            Assert.AreEqual(calc.getResult(), "-0.711111");
        }


        [TestMethod]
        public void CutDisplay1()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "123");
        }


        [TestMethod]
        public void CutDisplay2()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("7");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "-457");
        }

        [TestMethod]
        public void CutDisplay3()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("0");

            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "0");
        }

        [TestMethod]
        public void CutDisplay4()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("-");
            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("8");

            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "-1.234567");
        }

        [TestMethod]
        public void CutDisplay5()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("8");
            calc.EnterDigit("9");
            calc.EnterDigit("0");

            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "123456789");
        }

        [TestMethod]
        public void CutDisplay7()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("2");
            calc.EnterDigit("3");
            calc.EnterDigit("4");
            calc.EnterDigit("5");
            calc.EnterDigit("6");
            calc.EnterDigit("7");
            calc.EnterDigit("8");
            calc.EnterDigit("9");
            calc.EnterDigit("0");
            calc.ExecuteOperation();

            Assert.AreEqual(calc.getResult(), "1.2345678");
        }
        [TestMethod]
        public void TestClear()
        {
            var calc = new CalcLogic();

            calc.EnterDigit("1");
            calc.EnterDigit(".");
            calc.EnterDigit("1");
            calc.EnterDigit("+");
            calc.EnterDigit("8");
            calc.EnterDigit("9");
            calc.Clear();

            Assert.AreEqual(calc.getResult(), "0");
        }
    }
}



---
sidebar: auto
sidebarDepth: 0
---

## C# 教程

C# 是一个简单的、现代的、通用的、面向对象的编程语言，它是由微软（Microsoft）开发的。
本教程将告诉您基础的 C# 编程，同时将向您讲解 C# 编程语言相关的各种先进理念。



## C# 简介

C# 是一个现代的、通用的、面向对象的编程语言，它是由微软（Microsoft）开发的，由 Ecma 和 ISO 核准认可的。

C# 是由 Anders Hejlsberg 和他的团队在 .Net 框架开发期间开发的。

C# 是专为公共语言基础结构（CLI）设计的。CLI 由可执行代码和运行时环境组成，允许在不同的计算机平台和体系结构上使用各种高级语言。

下面列出了 C# 成为一种广泛应用的专业语言的原因：

- 现代的、通用的编程语言。
- 面向对象。
- 面向组件。
- 容易学习。
- 结构化语言。
- 它产生高效率的程序。
- 它可以在多种计算机平台上编译。
- .Net 框架的一部分。

---

### C# 强大的编程功能
虽然C#的构想十分接近于传统高级语言C和C++，是一门面向对象的编程语言，但是它与Java非常相似，有许多强大的编程功能，因此得到广大程序员的青睐。
下面列出C#一些中通过要功能：
- 布尔条件 (Boolean Conditions)
- 自动垃圾回收 (Automatic Garbage Collection)
- 标准库 (Standard Library)
- 组件版本 (Assembled Versioning)
- 属性(Properties) 和事件 (Events)
- 委托(Delegates)和事件管理(Events Management)
- 易于使用的泛型(Generics)
- 索引器(Indexers)
- 条件编译(Conditional Compilation)
- 简单的多线程(Multithreading)
- LINQ和Lambda表达式
- 集成Windows

## C#环境
在这一章中，我们将讨论创建C#编程所需的工具。我们已经提到C# 是.Net框架的一部分，且用于编写.Net应用程序。因此，在讨论运行C#程序的可用工具之前，让我们先了解一下C# 与.Net框架之间的关系。

### .Net框架(.Net Framework)
.Net框架是一个创新的平台，能帮您编写出下面类型的应用程序:
- Windows 应用程序
- Web应用程序
- Web服务

.Net 框架应用程序是多平台的应用程序。框架的设计方式使它适用于下列各种语言: C#、C++、Visual Basic、Jscript、COBOL等等。所有这些语言可以访问框架，彼此之间也可以互相交互。
.Net 框架是由一个巨大的代码库组成，用于C#等客户端语言。
下面列出一些.Net框架的组件:
- 公共语言运行库（Common Language Runtime - CLR）
- .Net 框架类库 (.Net Framework Class Library)
- 公共语言规范 (Common Language Specification)
- 通用类型系统 (Common Type System)
- 元数据(Metadata)和组件(Assembles)
- Windows 窗体 (Windows Forms)
- ASP.Net 和 ASP.Net AJAX
- ADO.Net
- Windows 工作流基础 (Windows Workflow Foundation -WF)
- Windows 显示基础 (Windows Presentation Foundation - WPF)
- Windows 通信基础 (Windows Communicate Foundation - WCF)
- LINQ
如需了解每个组件的信息,请参阅微软的文档.

---

### 在Linux 或 Mac OS上编写C#程序
虽然.Net框架是运行在Windows操作系统上,但是也有一些运行在其他操作系统上的版本可供选择。Mono是.Net框架的一个开源版本,它包含了一个C# 编译器,且可运行于多种操作系统上,比如各种版本的Linux和Mac OS. 如需了解更多详情,请访问[Go Mono](http://www.mono-project.com/download/stable/)。
Mono 的目的不仅仅是跨平台地运行微软.Net应用程序,而且也为Linux开发者提供了更好的开发工具. Mono可运行在多种操作系统上,包括Android、BSD、IOS、Linux、OS X、Windows、Solaris和UNIX。

## C#程序结构
在我们学习C# 变成语言的基础构建块之前，让我们先看一下C# 的最小的程序结构，以便作为接下来章节的参考。
### Hello World
一个C# 程序主要包括以下部分:
- 命名空间声明 (Namespace declaration)
- 一个class
- Class 方法
- Class 属性
- 一个Main方法
- 语句(Statement) & 表达式(Expression)
- 注释

让我们看一个可以打印出"Hello World"的简单代码:
``` csharp
using System;
namespace HelloWorldApplication
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            /* 我的第一个 C# 程序 */
            Console.WriteLine("HelloWorld");
            Console.ReadKey();
        }
    }
}
```
当上面的代码被编译和执行时,他将产生下列结果:
```
Hello World
```
让我们看一下上面程序的各个部分:
- 程序的第一行 **using System**; **using**关键字用于在程序中包含**System**命名空间。一个程序一般有多个**using**语句。
- 下一行是**namespace**声明。一个**namespace**里包括了一系列的类。HelloWorldApplication命名空间包含了类HelloWorld。
- 下一行是**class**声明。类HelloWorld 包含了程序使用的数据和方法声明。类一般包含多个方法。方法定义了类的行为。在这里，HelloWorld类只有一个**Main**方法。
- 下一行定义了**Main**方法，是所有C#程序的**入口点**。**Main**方法说明当执行时类将做什么动作。
- 下一行/\*...\*/将会被编译器忽略，且它会在程序中添加额外的**注释**。
- Main方法通过语句**Console.WriteLine("Hello World");**指定了它的行为。
- 最后一行**Console.ReadKey();**是针对VS.NET用户的。这使得程序会等待一个按钮的动作，防止程序从Visual Studio .NET 启动时屏幕会快速运行并关闭。

以下几点值得注意:
- C# 是大小写敏感的。
- 所有的语句和表达式必须以分号(;)结尾。
- 程序的执行从Main方法开始。
- 与Java不同的是，文件名可以不同于类的名称。

### 编译 & 执行C#程序
如果您使用Visual Studio.Net 编译和执行C#程序，请按下面的步骤进行：
- 启动Visual Studio。
- 在菜单栏上，选择File->New->Project。
- 从模板中选择Visual C#，然后选择Windows。
- 选择Console Application。
- 为您的项目制定一个名称，然后点击OK按钮。
- 新项目会出现在解决方案资源管理器中。
- 在代码编辑器中编写代码。
- 点击Run按钮或者按下F5键来运行程序，会出现一个命令提示符窗口，显示Hello World。

您也可以使用命令行代替Visual Studio IDE来编译C#程序:
- 打开一个文本编辑器，添加上面提到的代码。
- 保存文件为helloworld.cs。
- 打开命令提示符工具，定位到文件所保存的目录。
- 键入csc helloworld.cs 并按下enter按键来编译代码。
- 如果代码没有错误，命令提示符会进入下一行，并生成helloworld.exe 可执行文件。
- 接下来，键入helloworld来执行程序。
- 您将看到"Hello World"打印在屏幕上。

## C#基本语法
C#是一种面向对象的编程语言。在面向对象的程序设计方法中，程序由各种相互交互的对象组成。相同种类的对象通常具有相同的类型，或者说，是在相同的class中。
例如，以Rectangle(矩形)对象为例。它具有length和width属性。根据设计，它可能需要接受这些属性值、计算面积和显示细节。
让我们来看看一个Rectangle类的实现，并借此讨论C#的基本语法:
``` csharp
using System;
namespace RectangleApplication
{
    class Rectangle
    {
        // 成员变量
        double length;
        double width;
        public void Acceptdetails()
        {
            length = 4.5;
            width  = 3.5;
        }
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("Length:{0}",length);
            Console.WriteLine("Width:{0}",width);
            Console.WriteLine("Area:{0}",GetArea());
        }
    } // end class Rectangle
    
    class ExecutuRectangle
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.Acceptdetails();
            r.Display();
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果:
```
Length:4.5
Width:3.5
Area:15.75
```

---
### using 关键字
在任何C#程序中的第一条语句都是:
``` csharp
using System;
```
using关键字用于在程序中包含命名空间。一个程序可以包含多个using语句。

----
### class 关键字
class关键字用于声明一个类。

---
### C#中的注释
注释是用于解释代码。编译器会忽略注释的条目，在C#程序中，多行注意以/\*开始，并以字符\*/终止，如下所示:
``` csharp
/* This program demonstrates
The basic syntax of C# programming 
Language */
```
单行注释是用'//'符号表示。例如:
``` csharp
} // end class Rectangle
```

---
### 成员变量
变量是类的属性或数据成员，用于存储数据。在上面的程序中，Rectangle类有两个成员变量,名为length和width。

---
### 成员函数
函数是一系列执行指定任务的语句。类的成员函数是在类内声明的。我们举例的类Rectangle包含了三个成员函数: AcceptDetails、Get Area和Display。

---
### 实例化一个类
在上面的程序中，类ExecuteRectangle是一个包含Main()方法和实例化Rectangle类的类。

---
### 标识符
标识符是用来识别类、变量、函数或任何其它用户定义的项目。在C#中，类的命名必须遵循如下基本规则：
- 标识符必须以字母、下划线或`@`开头、后面可以跟一系列的字母、数字(0-9)、下划线( _ )、@。
- 标识符中的第一个字符不能是数字。
- 标识符必须不包含任何嵌入的空格或符号，比如？+-！#% ^ & * ( ) [ ] { } . ; : " ' / \。
- 标识符不能是C#关键字。除非它们有一个@前缀。例如，@if是有效的标识符，但if不是，因为if是关键字。
- 标识符必须区分大小写。大写字母和小写字母被认为是不同的字母。
- 不能与C#的类库名称相同。

---
### C#关键字
关键字是C#编译器预定义的保留字。这些关键字不能用作标识符，但是，如果您想使用这些关键字作为标识符，可以在关键字前面加上@字符作为前缀。
在C#中有些关键字在代码的上下文中有特殊的意义，如get和set，这些被称为上下文关键字(contextual keywords)。
下表列出了C#中的保留关键字(Reserved Keywords)和上下文关键字(Contextual Keywords):

| 保留关键字 |            |         |          |       |          |     |
| ----------|-------- | ------- | -------- | ----- | -------- | ------- |
| abstract   | as       | base    | bool     | break | byte     | case    |
| catch      | char     | checked | class    | const | continue | dicimal |
| default    | delegate | do      | double   | else  | enum     | event   |
| explicit   | extern   | false   | finally  | fixed | float    | for     |
| foreach    | goto     | if      | implicit | in    | in()     | int     |
| interface  | internal | is      | lock     | long  | namespace | new     |
| null | object | operator | out | out() | override | params |
| private | protected | public | readonly | ref | return | sbyte |
| sealed | short | sizeof | stackalloc | static | string | struct |
| switch | this | throw | true | try | typeof | uint |
| ulong | unchecked | unsafe | ushort | using | virtual | void |
| volatile | while |         |          |       |          |         |

| 上下文关键字 |        |           |            |         |         |         |
| ------------ | ------ | --------- | ---------- | ------- | ------- | ------- |
| add          | alias  | ascending | descending | dynamic | from    | get     |
| global       | group  | into      | join       | let     | orderby | partial |
| partial()    | remove | select    | set        |         |         |         |

---

## C#数据类型
在C#中，变量分为以下几种类型:
- 值类型(Value types)
- 引用类型(Reference types)
- 指针类型(Pointer types)

---
### 值类型 （Value types）
值类型变量可以直接分配给一个值。它们是从类**System.Value Type**中派生的。
值类型直接包含数据。比如**int、char、float**，他们分别存储数字、字符、浮点数。当您声明一个**int**类型时，系统分配内存来存储值。
下表列出了C#2010中可用的值类型:

| 类型    | 描述                            | 范围                                    | 默认值 |
| ------- | ------------------------------- | --------------------------------------- | ------ |
| bool    | 布尔值                          | True或False                             | False  |
| byte    | 8位无符号整数                   | 0到255                                  | 0      |
| char    | 16位Unicode字符                 | U+0000到U+ffff                          | '\0'   |
| decimal | 128位精确的十进制,28-29有效位数 | -7.9 x 1028 到 7.9 x 1028               | 0.0M   |
| double  | 64 位双精度浮点型               | (+/-)5.0 x 10^-324 到 (+/-)1.7 x 10^308 | 0.0D   |
| float   | 32 位单精度浮点型               | -3.4 x 10^38 到 + 3.4 x 10^38           | 0.0F   |
| int     | 32 位有符号整数类型             | -2^31 到 2^31                           | 0      |
| long    | 64 位有符号整数类型             | -2^63 到 2^63                           | 0L     |
| sbyte   | 8 位有符号整数类型              | -128 到 127                             | 0      |
| short   | 16 位有符号整数类型             | -32,768 到 32,767                       | 0      |
| uint    | 32 位无符号整数类型             | 0 到 4,294,967,295                      | 0      |
| ulong   | 64 位无符号整数类型             | 0 到 2^64                               | 0      |
| ushort  | 16 位无符号整数类型             | 0 到 65,535                             | 0      |

如需得到一个类型或一个变量在特定平台上的准确尺寸,可以使用`sizeof`方法。表达式sizeof(type)产生以字节为单位存储对象或类型的存储尺寸。下面举例获取任何机器上`int`类型的存储尺寸:
``` csharp
using System;
namespace DataTypeApplication
{
    class Propram
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Size of int:{0}", sizeof(int));
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
Size of int: 4
```

---
### 引用类型 (Reference types)
引用类型不包含存储在变量中的实际数据，但它们包含对变量的引用。
换句话说，它们指的是一个内存的位置。使用多个变量时，引用类型可以指向一个内存位置。如果内存位置的数据是由一个变量改变的，其他变量会自动反应这种值得变化。**内置的**引用类型有：**object、dynameic**和**string**。
#### 对象 (Object)类型
**对象(Object)类型** 是C#通用类型系统(Common Type System - CTS) 中所有数据类型的终极基类。Object是System.Object类的别名。所以对象(Object)类型可以被分配任何其他类型(值类型、引用类型、预定义类型或用户自定义类型)的值。但是，在分配之前，需要先进行类型转换。
当一个值类型转换为对象类型时，则被称为**装箱**；另一方面，当一个对象类型转换为值类型时，则被称为**拆箱**。

``` csharp
object obj;
obj = 100; // 这是装箱
```
#### 动态(Dynamic)类型
您可以存储任何类型的值在动态数据类型变量中。这些变量的类型检查是在运行时发生的。
声明动态类型的语法:
``` csharp
dynamic <variable_name> = value;
```
例如：
``` csharp
dynamic d = 20;
```
**动态类型与对象类型相似，但是对象类型变量的类型检查是在编译时发生的，而动态类型变量的类型检查是在运行时发生的。**
#### 字符串（String）类型
**字符串（String）类型**允许您给变量分配任何字符串。字符串(String) 类型是System.String 类的别名。它是从对象(Object)类型派生的。字符串(String)类型的值可以通过两种形式进行分配:**引号和@引号**
例如：
``` csharp
String str = "Hello World";
```
一个 @引号字符串
``` csharp
@"Hello World";
```
C# string字符串的前面可以加 @ （称作"逐字字符串"）将转义字符(\)当作普通字符对待，比如：
``` csharp
string str = @"C:\Windows";
```
等价于：
``` csharp
string str = "C:\\Windows";
```
@字符串中可以任意换行，换行符及缩进空格都计算在字符长度之内。
``` csharp
string str = @"<script type=""text/javascript"">
		<!--
    	-->
	</script>";
```
用户自定义引用类型有：class、interface或delegate。我们将在以后的章节中讨论这些类型。

---
### 指针类型（Pointer Types）
指针类型变量存储另一种类型的内存地址。C#中的指针与C或C++中的指针有相同的功能。
声明指针类型的语法：
``` csharp
type* identifier;
```
例如：
``` csharp
char* cptr;
int* iptr;
```
我们将在章节"不安全的代码中讨论指针类型"。

## C#类型转换
类型转换从根本上说是类型铸造，或者说是把数据从一种类型转换为另一种类型。在C#中，类型铸造有两种形式：
- **隐式类型转换** - 这些转换时C#默认的以安全方式进行的转换，不会导致数据丢失。例如，从小的整数类型转换为大的整数类型，从派生类转换为基类。
- **显示类型转换** - 即强制类型转换。显示转换需要强制转换运算符，而且强制转换会造成数据丢失。

下面的示例显示了一个显示的类型转换：
``` csharp
namespace TypeConversionApplication
{
    class ExplicitConversion
    {
        static void Main(string[] args)
        {
            double d = 123.33;
            int i;
            
            // 强制转换 double 为 int
            i = (int)d;
            Console.WriteLine(i);
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，它会产生如下结果
```
123
```

### C# 类型转换方法
C#提供了下列内置的类型转换方法: 

| 序号 | 方法 | 描述 |
| :- | :-------- | ---- |
| 1     | **ToBoolean**      | 如果可能的话，把类型转换为布尔型。 |
| 2     | **ToByte** | 把类型转换为字节类型。 |
| 3     | **ToChar** | 如果可能的话，把类型转换为单个 Unicode 字符类型。 |
| 4     | **ToDateTime** | 把类型（整数或字符串类型）转换为 日期-时间 结构。 |
| 5     | **ToDecimal** | 把浮点型或整数类型转换为十进制类型。 |
| 6     | **ToDouble** | 把类型转换为双精度浮点型。 |
| 7     | **ToInt16** | 把类型转换为 16 位整数类型。 |
| 8     | **ToInt32** | 把类型转换为 32 位整数类型。 |
|9     | **ToInt64** | 把类型转换为 64 位整数类型。 |
| 10     | **ToSbyte** | 把类型转换为有符号字节类型。 |
| 11     | **ToSingle** | 把类型转换为小浮点数类型。 |
| 12     | **ToString** | 把类型转换为字符串类型。 |
| 13     | **ToType** | 把类型转换为指定类型。 |
| 14     | **ToUInt16** | 把类型转换为 16 位无符号整数类型。 |
| 15     | **ToUInt32** | 把类型转换为 32 位无符号整数类型。 |
| 16     | **ToUInt64** | 把类型转换为 64 位无符号整数类型。 |

下面的实例把不同值的类型转换为字符串类型：

``` csharp
namespace TypeConversionApplication
{
    class StringConversion
    {
        static void Main(string[] args)
        {
            int i = 75;
            float f = 53.005f;
            double d = 2345.7652;
            bool b = true;

            Console.WriteLine(i.ToString());
            Console.WriteLine(f.ToString());
            Console.WriteLine(d.ToString());
            Console.WriteLine(b.ToString());
            Console.ReadKey();
            
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
75
53.005
2345.7652
True
```

## C# 变量
一个变量只不过是一个供程序操作的存储区的名字。在C#中，每个变量都有一个特定的类型，类型决定了变量的内存大小和布局。范围内的值可以存储在内存中，可以对变量进行一系列操作。
我们已经讨论过了各种数据类型。C#中提供的基本的值类型大致可以分为以下几类：

| 类型       | 举例                                                     |
| ---------- | -------------------------------------------------------- |
| 整数类型   | sbyte、byte、short、ushort、int、uint、long、ulong和char |
| 浮点类型   | float 和 double                                          |
| 十进制类型 | decimal                                                  |
| 布尔类型   | ture或false值，指定的值                                  |
| 空类型     | 可以为空值的数据类型                                     |

C# 允许定义其他值类型的变量，比如**enum**，与允许定义引用类型变量，比如**class**。这些我们将在以后的文章中进行讨论。在本章节中，我们只研究基本变量类型。

### C#中的变量定义
C#中变量定义的语法:
``` csharp
<data_type> <variable_list>
```

在这里，data_type必须是一个有效的C#类型，可以是char、int、float、double。variable_list  可以由一个或多个用逗号分隔的标识符名称组成。
一些有效的变量定义如下所示：
``` csharp
int i,j,k;
char c,ch;
float f,s;
double d;
```
您可以在变量定义时进行初始化：
``` csharp
int i = 100;
```

### C# 中的变量初始化
变量通过在等号后跟一个常量表达式进行初始化(赋值)。初始化的一般形式为：
``` csharp
variable_name = value;
```
变量可以在声明时被初始化（指定一个初始值）。初始化由一个等号后跟一个常量表达式组成，如下所示：
``` csharp
<data_type> <variable_name> = value;
```
一些实例：
``` csharp
int d = 3, f = 5; // 初始化 d 和 f
byte z = 22; 
char x = 'x';
```

正确地初始化变量是一个良好的编程习惯，否则有时程序会产生意想不到的结果。
请看下面的实例，使用了各种类型的变量：
``` csharp
namespace VariableDefinition
{
    class Program
    {
        static void Main(string[] args)
        {
            short a;
            int b;
            double c；
            
            /* 实际初始化 */
            a = 10;
            b = 20;
            c = a+b;
            Console.WriteLine("a = {0},b = {1},c = {2}",a,b,c);
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
a = 10,b = 20,c = 30
```
### 接受来自用户的值
**System**命名空间中的**Console**类提供了一个函数**ReadLine()**,用于接收来自用户的输入，并把它存储到一个变量中。
例如：
``` csharp
int num;
num Convert.ToInt32(Conmsole.ReadLine());
```
函数`Convert.ToInt32()`把用户输入的数据转换为int类型数据，因为Console.ReadLine()只接受字符串格式的数据。

---
### C#中的Lvalues 和 Rvalues
C#中的两种表达式:
1. **lvalue**  : lvalue表达式可以出现在赋值语句的左边或右边。
2. **rvalue** : rvalue表达式可以出现在赋值语句的右边，不能出现在复制语句的左边。
变量是lvalue的，所以可以出现在赋值语句的左边，数值是rvalue的，因此不能被赋值，不能出现在赋值语句的左边。下面是一个有效的语句:
``` csharp
int g = 20;
```
下面是一个无效的语句，会产生编译时错误:
``` csharp
10 = 20;
```

## C#常量
常量是固定值，程序执行期间不会改变，常量可以是任何基本数据类型，比如整数常量、浮点常量、字符常量或者字符串常量，还有枚举产量。
常量可以被当作常规的变量，只是它们的值在定义后不能被修改。

---
### 整数常量
整数常量可以是十进制、八进制或者十六进制的常量。前缀指定基数：0x 或 0X 表示十六进制，0 表示八进制，没有前缀则表示十进制。
整数常量也可以有后缀，可以是 U 和 L 的组合，其中， U 和 L 分别表示 unsigned 和 long。后缀可以是大写或者小写，多个后缀以任意顺序进行组合。
这里有一些整数常量的实例：
``` csharp
123		/* 合法 */
123u	/* 合法 */
0xFeeL	/* 合法 */
054		/* 非法：8 不是一个八进制数字 */
043UU	/* 非法：不能重复后缀 */
```
一下是各种类型的整数常量实例
``` csharp
85         /* 十进制 */
0213       /* 八进制 */
0x4b       /* 十六进制 */
30         /* int */
30u        /* 无符号 int */
30l        /* long */
30ul       /* 无符号 long */
```
### 浮点常量
一个浮点常量是由整数部分、小数点、小数部分和指数部分组成。您可以使用小数形式或者指数形式来表示浮点常量。
这里有一些浮点常量实例：
``` csharp
3.14159       /* 合法 */
314159E-5L    /* 合法 */
510E          /* 非法：不完全指数 */
210f          /* 非法：没有小数或指数 */
.e55          /* 非法：缺少整数或小数 */
```
使用小数形式表示时，必须包含小数点，指数或同时包含两者，使用指数形式表示时，必须包含整数部分、小数部分或同时包含两者。有符号的指数是用 e 或 E 表示的。

### 字符常量
字符常量是括在单括号里，例如，'X' ，且可以存储在一个简单的字符类型变量中，一个字符常量可以是一个普通字符(例如 'X' )、一个转义序列(例如'\t') 或者一个通用字符 (例如 '\u02C0 ' )。
在C#中有一些特定的字符。当它们的前面带有反斜杠时有特殊意义，可用于表示换行符(\n) 或制表符 tab (\t) 。在这里列出一些转义序列码：

| 转义序列 | 含义   |
| -------- | ------ |
| \\       | \ 字符 |
| \'       | ' 字符 |
| \"       | " 字符 |
| \?       | ? 字符 |

以下是一些转义序列字符的实例：
``` csharp
namespace EscapeChar
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello\tWorld\n\n");
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
Hello World
```
### 字符串常量
字符串常量是括在双括号`""`里，或者是括在`@""`里。字符串常量包含的字符与字符常量相似，可以是：普通字符、转义序列和通用字符
使用字符串常量时，可以把一个很长的行拆成多个行，可以使用空格分隔各个部分。
这里是一些字符串常量的实例。下面所列的各种形式表示相同的字符串。
``` csharp
string a = "hello, world";                  // hello, world
string b = @"hello, world";               // hello, world
string c = "hello \t world";               // hello     world
string d = @"hello \t world";               // hello \t world
string e = "Joe said \"Hello\" to me";      // Joe said "Hello" to me
string f = @"Joe said ""Hello"" to me";   // Joe said "Hello" to me
string g = "\\\\server\\share\\file.txt";   // \\server\share\file.txt
string h = @"\\server\share\file.txt";      // \\server\share\file.txt
string i = "one\r\ntwo\r\nthree";
string j = @"one
two
three";
```
### 定义常量
常量是使用 `const` 关键字来定义的。定义一个常量的语法如下：
``` csharp
const <data_type> <constant_name> = value;
```
下面的代码演示了如何在程序中定义和使用常量：
``` csharp
using System;
public class ConstTest
{
    class SampleClass
    {
    	public int x;
        public int y;
        public const int c1 = 5;
        public const int c2 = c1 + 5;

        public SampleClass(int p1, int p2) 
        {
            x = p1; 
            y = p2;
        }    
    }
    
    static void Main()
    {
        SampleClass mC = new SampleClass(11, 22);
        Console.WriteLine("x = {0}, y = {1}", mC.x, mC.y);
        Console.WriteLine("c1 = {0}, c2 = {1}", 
                          SampleClass.c1, SampleClass.c2);
    }
}

```
当上面的代码被编译和执行时，它会产生下列结果：
```
x = 11,y = 22
c1 = 5,c2 = 10
```

## C#运算符
运算符是一种告诉编译器执行特定的数学或逻辑操作的符号。C# 有丰富的内置运算符，分类如下：
- 算术运算符
- 关系运算符
- 逻辑运算符
- 位运算符
- 赋值运算符
- 其他运算符

## C#封装
**封装** 被定义为"把一个或多个项目封闭在一个物理的或者逻辑的包中"。在面向对象的设计方法中，封装是为了防止对实现细节的访问。
抽象和封装是面向对象程序设计的相关特性。抽象允许相关信息可视化，封装则使开发者*实现所需级别的抽象*。
C#封装根据具体的需求，设置使用者的访问权限，并通过 **访问修饰符** 来实现。
一个 **访问修饰符** 定义了一个类成员的范围可见性。C#支持的访问修饰符如下所示：
- public：所有对象都可以访问
- private：对象本身在对象内部可以访问
- protected：只有该类对象及其子类对象可以访问
- internal：同一个程序集的对象可以访问；
- protected internal：访问限于当前程序集或派生自包含类的类型。

---
### Public 访问修饰符
Public 访问修饰符允许一个类将其成员变量和成员函数暴漏给其他的函数和对象。任何公有成员可以被外部的类访问。下面的实例说明了这点：
``` csharp
using System;
namespace RectangleApplication
{
    class Rectangle
    {
        // 成员变量
        public double length;
        public double width;
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
        	Console.WriteLine("长度： {0}", length);
            Console.WriteLine("宽度： {0}", width);
            Console.WriteLine("面积： {0}", GetArea());
        }
    }// Rectangle 结束
    
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.length = 4.5;
            r.width = 3.5;
            r.Display();
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
长度： 4.5
宽度： 3.5
面积： 15.75
```
在上面的实例中，成员变量 length 和 width 被声明为 **public**，所以它们可以被函数Main() 使用 Rectangle 类的实例 r 访问。
成员函数 *Display()* 和 *GetArea()* 可以直接访问这些变量。
成员函数 *Display()* 也被声明为 **public**，所以它也能被 *Main()* 使用 Rectangle 类的实例 r 访问。

---
### Private 访问修饰符
Private 访问修饰符允许一个类将其成员变量和成员函数对其他的函数和对象进行隐藏。只有同一个类中的函数可以访问它的私有成员，即使是**类的实例**也不能访问它的私有成员。
下面的实例说明了这点：
``` csharp
using System;
namespace RectangleApplication
{
    class Rectangle
    {
        //成员变量
        private double length;
        private double width;
        public void Acceptdetails()
        {
            Console.WriteLine("请输入长度：");
            length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("请输入宽度：");
            width = Convert.ToDouble(Console.ReadLine());
        }
        
        public double GetArea()
        {
            return length * width;
        }
        
        public void Display()
        {
            Console.WriteLine("长度： {0}", length);
            Console.WriteLine("宽度： {0}", width);
            Console.WriteLine("面积： {0}", GetArea());
        }   
    }
    
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.Acceptdetails();
            r.Display();
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
请输入长度：
4.4
请输入宽度：
3.3
长度： 4.4
宽度： 3.3
面积： 14.52
```
在上面的实例中，成员变量 length 和 width 被声明为 private，所以它们不能被函数 Main() 访问。
成员函数 AcceptDetails() 和 Display() 可以访问这些变量。
由于成员函数 AcceptDetails() 和 Display() 被声明为 public，所以它们可以被 Main() 使用 Rectangle 类的实例 r 访问。

---
### Protected 访问修饰符
Protected 访问修饰符允许子类访问它的基类的成员变量和成员函数。这样有助于实现继承。我们将在继承的章节详细讨论这个。更详细地讨论这个。

---
### Internal 访问修饰符
Internal 访问修饰符允许一个类将其成员变量和成员函数暴露给**当前程序中的其他函数和对象**。换句话说，带有 internal 访问修饰符的任何成员可以被定义在该成员所定义的**应用程序内**的任何类或方法访问。
下面的实例说明了这点：
``` csharp
using System;
namespace RectangleApplication
{
    class Rectangle
    {
        //成员变量
        internal double length;
        internal double width;
        
        double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("长度： {0}", length);
            Console.WriteLine("宽度： {0}", width);
            Console.WriteLine("面积： {0}", GetArea());
        }
    }
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.length = 4.5;
            r.width = 3.5;
            r.Display();
            Console.ReadLine();
        }
    }
}
```
当上面的代码被编译和执行时，它会产生下列结果：
```
长度： 4.5
宽度： 3.5
面积： 15.75
```
在上面的实例中，请注意成员函数 *GetArea()* 声明的时候不带有任何访问修饰符。如果没有指定访问修饰符，则使用类成员的默认访问修饰符，即为 **private**。

---
### Protected Internal 访问修饰符
Protected Internal 访问修饰符允许在本类,派生类或者包含该类的程序集中访问。这也被用于实现继承。

## C# 方法✨
一个方法是把一些相关的语句组织在一起，用来执行一个任务的语句块，每一个C#程序至少有一个带有 Main 方法的类。
要使用一个方法，您需要：
- 定义方法
- 调用方法

---
### C# 中定义方法
当定义一个方法时，从根本上说是在声明它的结构的元素。在 C# 中，定义方法的语句如下：
``` csharp
<Access Specifier> <Return Type> <Method Name>(Parameter List)
{
   Method Body
}
```
下面是方法的各个元素：
- **Access Specifier**：访问修饰符，这个决定了变量或方法对于另一个类的可见性。
- **Return type**：返回类型，一个方法可以**返回一个值**。返回类型是方法返回的值的数据类型。如果方法不返回任何值，则返回类型为void。
- **Merhod name**：方法名称，是一个唯一的标识符，且是大小写敏感的。它不能与类中声明的其他标识符相同。
- **Parameter list**：参数列表，使用圆括号括起来，该参数是用来传递和接受方法的数据。参数列表是指方法的参数类型、顺序和数量。参数是可选的，也就是说，一个方法可能不包含参数。
- **Method body**：方法主题，包含了完成任务所需的指令集。

---

是的❤😍😊✔😜✨
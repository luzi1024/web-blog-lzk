---
sidebar: auto
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
    
}
```
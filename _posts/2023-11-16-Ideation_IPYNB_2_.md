---
toc: True
comments: True
layout: notebook
title: Card Complexity Ideation Week Project Plan
description: This is our project plan for our Card Complexity Project for AP CSA.
courses: {'compsci': {'week': 1}}
type: plans
---

# Our Objective
We are going to create a learning tool for students like us to be able to visualize some difficult concepts. 

In order to better visualize the different sorts and procedures through animations, we are going to utilize the values of cards (1-10). In addition, we are going to demonstrate data in order to see all of the time complexities. 

# Our Plans 
## Frontend
- Animations for all of the different sorts to visualize the sorts 
- Different selection menus in order to see all of the different sorts compared 
- The concept visualizations of fibanochi, inheritance, time complexity, palindrone algorithm using progression bar, etc. 

## Backend 
- Different API endpoints for bubble, merge, selection, and insertion sorts and recursion and palindrome to recive numerical value data from cards and return data in various levels of progressions (we need to send requests to help visualize and animate on the frontend)
- Test the differnet implementations of the sorts and the time complexity endpoints 

## Splitting of Work 
- Every person will do java, each memeber in our group has to work on two different sorts in java. 

Sreeja: Fibonachi, Selection for the backend, and then animations to match these sorts on the frontend.

Tirth: Bubble, Insertion for the backend, and then animations to match these sorts on the frontend. 

Ekam: Palindrome, Merge for the backend, and then animations to match these sorts on the frontend. 

# Organization 
[Scrum Board](https://github.com/orgs/Card-Complexity/projects/1)

## Bubble Sort Sample


```java
import java.util.Arrays;
import java.util.Random;

public class genericSort {
    // instance variables to keep track of iterations, comparisons, and swaps
    protected int iterations;
    protected int comparisons;
    protected int swaps;

    public void sort(int[] arr) {
        iterations = 0;
        comparisons = 0;
        swaps = 0;
    }

    public void test() {
        long startTime = System.nanoTime();
        for (int i = 0; i < 12; i++) {
            int[] arr = new int[5000];
            Random rand = new Random();

            for (int j = 0; j < arr.length; j++) {
                arr[j] = rand.nextInt(1000);
            }

            sort(arr);
        }
        long endTime = System.nanoTime();

        System.out.println("Total iterations: " + iterations);
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
        System.out.println("Total time: " + (endTime - startTime) / 1000000 + " ms");
    }

    public void testRandomValues() {
        int[] arr = new int[10];
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000);
        }

        System.out.println("Before sorting: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }
}
```


```java
import java.util.Arrays;
import java.util.Random;

public class bubbleSort {
    // instance variables to keep track of iterations, comparisons, and swaps
    private int iterations;
    private int comparisons;
    private int swaps;

    // method to perform bubble sort on an array
    public void sort(int[] arr) {
        // reset instance variables
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        // loop through the array n-1 times
        for (int i = 0; i < n - 1; i++) {
            // loop through the array from 0 to n-i-1
            for (int j = 0; j < n - i - 1; j++) {
                iterations++;
                // if the current element is greater than the next element, swap them
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps++;
                    comparisons++;
                } else {
                    comparisons++;
                }
            }
        }
    }

    // method to test the performance of bubble sort on random arrays
    public void test() {
        // start timer
        long startTime = System.nanoTime();
        // perform bubble sort on 12 random arrays
        for (int i = 0; i < 12; i++) {
            int[] arr = new int[5000];
            Random rand = new Random();
            
            for (int j = 0; j < arr.length; j++) {
                arr[j] = rand.nextInt(1000);
            }
            
            sort(arr);
        }
        // stop timer
        long endTime = System.nanoTime();

        // print out performance metrics
        System.out.println("Total iterations: " + iterations);
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
        System.out.println("Total time: " + (endTime - startTime) / 1000000 + " ms");
    }

    // method to test bubble sort on a small array of random values
    public void testRandomValues() {
        int[] arr = new int[10];
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000);
        }

        System.out.println("Before sorting: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }

    // main method to run the program
    public static void main(String[] args) {
        bubbleSort bs = new bubbleSort();
        bs.testRandomValues();
        bs.test();
    }
}

// call the main method to run the program
bubbleSort.main(null);

```

    Before sorting: [82, 9, 119, 751, 387, 125, 490, 866, 555, 735]
    After sorting: [9, 82, 119, 125, 387, 490, 555, 735, 751, 866]
    Total iterations: 12497500
    Total comparisons: 12497500
    Total swaps: 6088261
    Total time: 371 ms



```java
public class bubbleSort extends genericSort {
    @Override
    public void sort(int[] arr) {
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                iterations++;
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps++;
                    comparisons++;
                } else {
                    comparisons++;
                }
            }
        }
    }
    public static void main(String[] args) {
        bubbleSort bs = new bubbleSort();
        bs.testRandomValues();
        bs.test();
    }
}
bubbleSort.main(null);

```

    Before sorting: [45, 399, 210, 396, 802, 398, 147, 802, 984, 238]
    After sorting: [45, 147, 210, 238, 396, 398, 399, 802, 802, 984]
    Total iterations: 12497500
    Total comparisons: 12497500
    Total swaps: 6311297
    Total time: 548 ms


## Insertion Sort Sample


```java
import java.util.Arrays;
import java.util.Random;

public class insertionSort {
    // instance variables to keep track of iterations, comparisons, and swaps
    private int iterations;
    private int comparisons;
    private int swaps;

    // method to perform insertion sort on an array
    public void sort(int[] arr) {
        // reset instance variables
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        // loop through the array starting from the second element
        for (int i = 1; i < n; i++) {
            // set the key to the current element
            int key = arr[i];
            // set j to the index of the previous element
            int j = i - 1;
            // loop through the sorted portion of the array backwards
            while (j >= 0 && arr[j] > key) {
                // shift the current element to the right
                arr[j + 1] = arr[j];
                // decrement j
                j--;
                // increment the iteration, comparison, and swap counters
                iterations++;
                comparisons++;
                swaps++;
            }
            // insert the key into its correct position
            arr[j + 1] = key;
            // increment the swap counter
            swaps++;
        }
    }

    // method to test the performance of insertion sort on random arrays
    public void test() {
        // start timer
        long startTime = System.nanoTime();
        // perform insertion sort on 12 random arrays
        for (int i = 0; i < 12; i++) {
            int[] arr = new int[5000];
            Random rand = new Random();
            
            for (int j = 0; j < arr.length; j++) {
                arr[j] = rand.nextInt(1000);
            }
            
            sort(arr);
        }
        // stop timer
        long endTime = System.nanoTime();

        // print out performance metrics
        System.out.println("Total iterations: " + iterations);
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
        System.out.println("Total time: " + (endTime - startTime) / 1000000 + " ms");
    }

    // method to test insertion sort on a small array of random values
    public void testRandomValues() {
        int[] arr = new int[10];
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000);
        }

        System.out.println("Before sorting: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }

    // main method to run the program
    public static void main(String[] args) {
        insertionSort is = new insertionSort();
        is.testRandomValues();
        is.test();
    }
}


insertionSort.main(null);
```

    Before sorting: [417, 669, 173, 122, 239, 58, 341, 87, 740, 267]
    After sorting: [58, 87, 122, 173, 239, 267, 341, 417, 669, 740]
    Total iterations: 6208413
    Total comparisons: 6208413
    Total swaps: 6213412
    Total time: 126 ms



```java
// rewritten using inheritance of generic

public class insertionSort extends genericSort {
    @Override
    public void sort(int[] arr) {
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
                iterations++;
                comparisons++;
                swaps++;
            }
            arr[j + 1] = key;
            swaps++;
        }
    }
    public static void main(String[] args) {
        insertionSort is = new insertionSort();
        is.testRandomValues();
        is.test();
    }
}

insertionSort.main(null);
```

    Before sorting: [331, 331, 912, 241, 37, 707, 907, 32, 79, 590]
    After sorting: [32, 37, 79, 241, 331, 331, 590, 707, 907, 912]
    Total iterations: 6167395
    Total comparisons: 6167395
    Total swaps: 6172394
    Total time: 115 ms


## Selection Sort Sample


```java
import java.util.Arrays;
import java.util.Random;

public class selectionSort {
    // instance variables to keep track of iterations, comparisons, and swaps
    private int iterations;
    private int comparisons;
    private int swaps;

    // method to perform selection sort on an array
    public void sort(int[] arr) {
        // reset instance variables
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                iterations++;
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
                comparisons++;
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            swaps++;
        }
    }

    // method to test the performance of selection sort on random arrays
    public void test() {
        // start timer
        long startTime = System.nanoTime();
        // perform selection sort on 12 random arrays
        for (int i = 0; i < 12; i++) {
            int[] arr = new int[5000];
            Random rand = new Random();

            for (int j = 0; j < arr.length; j++) {
                arr[j] = rand.nextInt(1000);
            }

            sort(arr);
        }
        // stop timer
        long endTime = System.nanoTime();

        // print out performance metrics
        System.out.println("Total iterations: " + iterations);
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
        System.out.println("Total time: " + (endTime - startTime) / 1000000 + " ms");
    }

    // method to test selection sort on a small array of random values
    public void testRandomValues() {
        int[] arr = new int[10];
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000);
        }

        System.out.println("Before sorting: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }

    // main method to run the program
    public static void main(String[] args) {
        selectionSort ss = new selectionSort();
        ss.testRandomValues();
        ss.test();
    }
}

selectionSort.main(null);

```

    Before sorting: [754, 244, 363, 734, 422, 782, 980, 507, 541, 666]
    After sorting: [244, 363, 422, 507, 541, 666, 734, 754, 782, 980]
    Total iterations: 12497500
    Total comparisons: 12497500
    Total swaps: 4999
    Total time: 152 ms



```java
// rewritten using inheritance of generic

public class selectionSort extends genericSort {
    @Override
    public void sort(int[] arr) {
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                iterations++;
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
                comparisons++;
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            swaps++;
        }
    }
    public static void main(String[] args) {
        selectionSort ss = new selectionSort();
        ss.testRandomValues();
        ss.test();
    }
}

selectionSort.main(null);
```

    Before sorting: [680, 549, 465, 61, 22, 371, 334, 746, 871, 999]
    After sorting: [22, 61, 334, 371, 465, 549, 680, 746, 871, 999]
    Total iterations: 12497500
    Total comparisons: 12497500
    Total swaps: 4999
    Total time: 127 ms


## Merge Sort


```java
import java.util.Arrays;
import java.util.Random;

public class MergeSort {
    // instance variables to keep track of iterations, comparisons, and swaps
    private int iterations;
    private int comparisons;
    private int swaps;

    // method to perform merge sort on an array
    public void sort(int[] arr) {
        // reset instance variables
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        mergeSort(arr, 0, arr.length - 1);
    }

    // recursive method for merge sort
    private void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // middle point
            int mid = left + (right - left) / 2;

            // split both halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            // merging sorted halves
            merge(arr, left, mid, right);
        }
    }


    private void merge(int[] arr, int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;


        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];


        for (int i = 0; i < n1; ++i)
            leftArr[i] = arr[left + i];
            swaps++;
        for (int j = 0; j < n2; ++j)
            rightArr[j] = arr[mid + 1 + j];
            swaps++;

        // merging arrays

        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2) {
            iterations++;
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
            swaps++;
            comparisons++;
        }

        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
            swaps++;
        }

        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
            swaps++;
        }
    }

    public void test() {
        // timer
        long startTime = System.nanoTime();
        for (int i = 0; i < 12; i++) {
            int[] arr = new int[5000];
            Random rand = new Random();

            for (int j = 0; j < arr.length; j++) {
                arr[j] = rand.nextInt(1000);
            }

            sort(arr);
        }
        // stop timer
        long endTime = System.nanoTime();

        System.out.println("Total iterations: " + iterations);
        System.out.println("Total comparisons: " + comparisons);
        System.out.println("Total swaps: " + swaps);
        System.out.println("Total time: " + (endTime - startTime) / 1000000 + " ms");
    }

    public void testRandomValues() {
        int[] arr = new int[10];
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(1000);
        }

        System.out.println("Before sorting: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }

    public static void main(String[] args) {
        MergeSort ms = new MergeSort();
        ms.testRandomValues();
        ms.test();
    }
}

MergeSort.main(null);

```

    Before sorting: [659, 641, 395, 86, 606, 42, 825, 920, 926, 257]
    After sorting: [42, 86, 257, 395, 606, 641, 659, 825, 920, 926]
    Total iterations: 55264
    Total comparisons: 55264
    Total swaps: 71806
    Total time: 9 ms



```java
// w/ inheritance 

public class mergeSort extends genericSort {
    @Override
    public void sort(int[] arr) {
        // reset instance variables
        iterations = 0;
        comparisons = 0;
        swaps = 0;

        mergeSort(arr, 0, arr.length - 1);
    }

    // recursive method for merge sort
    private void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            // middle point
            int mid = left + (right - left) / 2;

            // split both halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            // merging sorted halves
            merge(arr, left, mid, right);
        }
    }


    private void merge(int[] arr, int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;


        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];


        for (int i = 0; i < n1; ++i)
            leftArr[i] = arr[left + i];
            swaps++;
        for (int j = 0; j < n2; ++j)
            rightArr[j] = arr[mid + 1 + j];
            swaps++;

        // merging arrays

        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2) {
            iterations++;
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
            swaps++;
            comparisons++;
        }

        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
            swaps++;
        }

        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
            swaps++;
        }
    }

    public static void main(String[] args) {
        mergeSort m = new mergeSort();
        m.testRandomValues();
        m.test();
    }
}

mergeSort.main(null);
```

    Before sorting: [3, 390, 843, 867, 762, 137, 109, 46, 298, 362]
    After sorting: [3, 46, 109, 137, 298, 362, 390, 762, 843, 867]
    Total iterations: 55236
    Total comparisons: 55236
    Total swaps: 71806
    Total time: 9 ms


# Fibonacci


```java
import java.util.ArrayList;
import java.util.List;

public class Fibonacci {
    // method to generate Fibonacci numbers up to a specified limit
    public List<Integer> generateFibonacci(int limit) {
        List<Integer> fibonacciNumbers = new ArrayList<>();
        
        int a = 0;
        int b = 1;

        while (a <= limit) {
            fibonacciNumbers.add(a);
            int temp = a;
            a = b;
            b = temp + b;
        }

        return fibonacciNumbers;
    }

    // method to test the generation of Fibonacci numbers
    public void test() {
        // specify the limit for Fibonacci numbers
        int limit = 100;

        // generate Fibonacci numbers up to the limit
        List<Integer> fibonacciNumbers = generateFibonacci(limit);

        // print out the generated Fibonacci numbers
        System.out.println("Fibonacci numbers up to " + limit + ": " + fibonacciNumbers);
    }

    // main method to run the program
    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        fibonacci.test();
    }
}

Fibonacci.main(null);
```

    Fibonacci numbers up to 100: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


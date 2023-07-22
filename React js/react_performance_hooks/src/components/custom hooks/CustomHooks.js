import React from 'react'

function useReverseString(string) {

    const reverseStringValue = string.split("").reverse().join("")

  return {
    reverseString : reverseStringValue
  }
}

export default useReverseString
def maxArea(self, height):
    left, right = 0, len(height) - 1
    result = 0

    while left < right:
        h = min(height[left], height[right]) * (right - left)
        result = max(result, h)
        if height[left] < height[right]:
            left += 1
        elif height[right] < height[left]:
            right -= 1
        elif height[left] == height[right]:
            right -= 1

    return result

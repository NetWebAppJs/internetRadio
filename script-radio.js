var g_volume = 80;
var g_link = rad_stations[0][0];
var is_play = false;
var g_text_color = '#ffffff';
var g_playimg = g_pause_white;
var g_pauseimg = g_pause_white;
var g_soundimg = g_sound_white;
var g_rad_width = 'responsive';
var g_rad_width_px = 330;

var g_play_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5OTc2RkQxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE5OTc2RkMxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DF5mqgAAAWtJREFUeNq8ls0uBEEQx2c63BzNnmRm4yTcfFzcxN2R4R0QcSdewTsw4RVkkazEgeuKEyHjspx8HbDb/rWpTkS6p7t3jH/yu8z0VHVVd1VNKKUMCjQKFsEcGAcR+AQ5uAOn4ADcGi2QAw0x2AcdaVeH18Y6WzrjC+BZ+usFLNscrDvu2qQu2DA5WOIFZdVlWz27IR9yDFpgyHBUHyAEg4GbXsEEuFe73yvY0QOogQQ0PCLJVIoSS96bP9JIEa+Bd8fblQiEkQLhGDrlcxdMggvL2p5twUXkq2swC7bBV8G6eQo7t4TaNBSjYhq0DN/mFMFwUE6XYIbbx29FIqhY5OCppI0pPvARzbtHwQXWjwbAFjjnTqvTFTk47sP4GDgDO5bqbtAtqHsW2ip4cyy0uvows7SKiPv9kW+r+LdmR6R/2K7TKgfOZpUjc8VlJquhn3kM/cw09EOP3xY6tBo/b/OlOAGH4MZk4FuAAQCY66oR7nR+fgAAAABJRU5ErkJggg==";
var g_play_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAAAEAAAABAE8lxNYAAAGbUExURf///7fZ4ZTm+o7k9/T9/X3d9uv5+/7//+n3+Jno+Ibg+ILf9zOc1oPh+ozi+JDl+SGNzv39/Yng+Jbo+qjn83TU88Pj6Iri+iqd1kOp3rrZ4iqU0ZPl+PP//27Q8XrZ9kuv3z2j2iKT0YDc9k6z4/v//1O25S+Y04zM3qHH0prB0VOXuTig2SaQzzCh2XnG3lWcvI7h96Lj8Uat4HfX9F/K7xiHySiZ1Fa65pLO35vr+1y+6kKZwx6Iy12kwqXL0z6o3Dik3D+u4WfO8Ibe9dfq8FfE7U++6Zbf8WnH7Lzi6DSn3WDA7LLd5VClzZW9zmi62XDA21qhwNbz+Z3T45vh8Ue35nnX81y65IXH3Pf+/7jg5zaRwWvL7xqLzZfR4YDT7YvY7pfX7On8/8Tt9XyrwkONs02avne3027U8zis30Gz46vW5R54sEmfyGPF7KDt/V+x06Hb62KcuYvR6K/h7zCIuMvi6Vesz2W21rjn8eH4+0Gi0XbL6YHB16/Q3CJ+tCiCtmOnwkHmwkHmwpTk/bfm94799pTk/TceAKUAAAJtSURBVDjLdZLpVxJhFIfHIRidUYYZREGGRQfE2AzQWCtAXAgiiQhFKDUzNiHNtb3+8u5934lz+uBz5tP8nvu798wZRvI+uJ+mJDHNzQWNiQl4/uemKTGbg9kx0dkopV6v7yDJG4aZS36aSqVSUxqKouh0EUAuFArzq8+ooGE2s6wiijqd0Tgv8zwvzFCBTiusmYVxRdRFjEZZlnlBUKmwkiKzyk6EZUVRy2FeVfX/BBarL06iRxFSbyT1gqrXC1UqKArLRl4bHCfHR0ZSX6C5S08FM2xGgfF+vToqYL1A84ar+pAIsFlEAb5a7fhQG9c31tZcu0RgdYAMAscx3Psvl4eCQHKLxUKEfTECl8nvQEDFW7s4bEA9xE7LHRVkvIsIBMfJ5XeMnW0nFeZ5vsCrYwH3XK0W2+12sX0OwvPVGThKVZPkBmJIsOe4WByNilSAm136RnK8ggOjOdgdlcvlWyLARXDyyniFxDCbHz7uldN76QoKVRdc1HVqAidxjMEfqECcSKQrfhTgXme3vY83YLt34TOMJxLLwBAaDna7G8Doh4Esh/ZTdxpSj8fj9mSg4eBuYx1Ig0DbhzR0u2O2GBHO17eARGeSw/aMexmzmA1YtLVQuN3aBjwdA7Z/82CWtWUXgeAiCi8q22+AWKfmP23Z8tksZsFgcBq5fgnCsN/v5/PZSuA6mM/lclrmA+y+3yhk8r1er1Sa9uVy4bCW2ZFQyP6LCKVSKYxYrdZ43EcSwASEzlBohTGIx+1LAHlvMj2hmFCYy1jJaHyJAOlb4DHl7Cf8HoM/TwmvkEcaAYrfITGS1zB5HwavJP0FFleX0TNLStoAAAAASUVORK5CYII=";
var g_pause_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5OTc3MDExQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE5OTc3MDAxQkE0MTFFODgyODJFRUREQTk4NDYyMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W9Wb8wAAADlJREFUeNpi/P//PwMtARMDjQHNLWAhII8efoxEyg2jIBq1YNSCUQtGLRi1YFjUaIxkyg2jIAIIMACulQUzpYSECgAAAABJRU5ErkJggg==";
var g_pause_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QTk5NzcwNDFCQTQxMUU4ODI4MkVFRERBOTg0NjIwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QTk5NzcwNTFCQTQxMUU4ODI4MkVFRERBOTg0NjIwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBOTk3NzAyMUJBNDExRTg4MjgyRUVEREE5ODQ2MjBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBOTk3NzAzMUJBNDExRTg4MjgyRUVEREE5ODQ2MjBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WsafDgAAAD5JREFUeNpi/P//PwMtARMDjQHNLWDBJ2liYoISfmfOnGEkRm54BdGoBaMWjFowasGoBUPCAsbRSp8QAAgwAHVNDivmolxgAAAAAElFTkSuQmCC";

var g_sound_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyQTE3N0EyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyQTE3NzkyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eZyjRAAAAT9JREFUeNpi/P//PwMtAeOQt4ABZAEFuAGIbwBxGC41xBqkDMTzgJgPTdwFiB//h4DZQMxMjgUyQHwfaogNFnleIF4IlZ9FqgWiQHzzPwIgW3AAiE8BsQEQg+JyOlRNJLEWCALxpf+oANmCTCD+BsRfgdgCiNmA+AoQPwFiTmwWqEDDFIZP/McE6EGkCcSvgPgREHMBcQBUXQw2Cz7/JwxAFrAD8QsgXgJ1tTdULheImYD4JRCvxWbBfyItYEAK72IoHxRPe6HsdUD8AGYuE5nZJxOITwNxMJR/GYjVoezHQCwOU8hEg7zLhswh14LpQGwKxGuhfF0gvgllywDxS2xFxXsSIvkVlkjOJxTJpCRTRhzJ1BeqLnZAMho5RcVpLEVF1KAq7NCLa348xfVccotrYiqccFxqGEcrfUIAIMAAMVC8ueloYN0AAAAASUVORK5CYII=";

var g_sound_black = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDk0YzU4OS1lOThjLTFiNGEtYmJjYS04NDUzMDQwZTQzMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyQTE3N0UyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyQTE3N0QyMzk2MTFFODg2QzdDMzAyRDM4NTg4RDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmNhMGQ4NGMtNGRlMy1mYjQwLWI0MGEtNjM3MzNlMzQ3ZDBjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzAyM2I4YzctMDBkOS0xMWU4LWFjYTYtOGEzZjhiMzZkMjIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WGl9jgAAAbFJREFUeNrU1ksoRFEYwHGvyLMssGChyJvNNCxYqLFTIoVS8kosZGdlYaEsZCHJQiF5REQiG0JYSLIQIRbCAgs2SMn4n/qmpusMd4xbfPVr7txb59zzne98M/5Op9PPygjwsziCihyOP72CTpygwtcJkjCMKMP9bYRjGkMI/MkECVhFHXIMz9T9DIyhEYOf9uCbwWOwhkTNsw2EoQm1eEYz1jFlZgXRMniKh+cqLVnYQR7acIQehOomSEaRmxVkf/ECKh02PGFGstGBeJTrUnSACBN7EoJLyX+97M0SGjCAO5Rh3LiCCJMV9Yp5VKMVyzhDKd4lZTZfz0EL9txScYhUub5CnJWtIvg3TrLaYDvm5LsqhlO3c3Orm+DR5OAhkpoJ9KNYSnlRxsvFvq6K7IYD1SX1rdtklWPV59MxInkfkslisaCb4Fy4Qr3Fpoez4JSN7pXrEryhGzeYNbMHD3BICeqiUk5uPnbRh0y048VsL7qXSbY0/ahQPiMxihpJ06S3VXQtrWNE6t091P1jGXxY0uZVN3XFhbQFYxRIL6qS5mfJL1qap8FV+P/7fxUfAgwAMD9cdVs4gKIAAAAASUVORK5CYII=";

var g_radiologo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAAAEAAAABAE8lxNYAAABjUExURcbu5c/37Nb/8cLo4Mjw58zz6tP778nx6cfv58Tr4wABSwAAQQAHUZO0v3aTqaLFy7fd26vP0py+xompuN3/9rPY1zhQfn+esWeEoBEmYwUXWylAdFBqj77k3kReh1t3lxswaphmtsoAAAMPSURBVDjLbVQHkiMxCBQKCIXJOfv/rzyksWe9d+eqcSFEi9QgiEg4S+RYcCId6OsgtHgLj1brZG21sNoKMpZY0LfWEgy1+RxuLT+hCYtOJkE7Myj7BvDTWshx7vlxtsma9KU/85puAIlL6I8HDgJbvzhzA348EDShlLercgH6BQib0f8B+CsDBI6r1Y9z4hfGQtLfIRHU/mSA5ftzFfYraW0OK76STnURzolj3YxSzinY4+FYuL+kEXWhj/fh1rIHMq+XIcdu8YqHYeGph8B5ko5jc+lPpJuc67ZyLfhazr42v0JSayf5BSMl0tMHgacfwOX3fAPuqVKuR8EejCr3lP0HIK/Q3IAyVL8BVQbAGLzv0D0e2A4zoGOAok8BLSEDUMnJL/EG6LuaXWjZju8LBoAkmzIzhhKgQl3PNe2npLuszEQoQtGDEUno+q4DZqzApgYHbWwMzgW36dA3j7kPzrBdN1ZWJaH1oTCHwjKuDZkuNtYtUy9++mBtSu2MYQMWwrR57juHHXxsACc/yMqvJYscqGXjFC00cV0i39smvooybNZUW7ddveN0m74I0cexwqesZAY/48aU1UNchVmYUHPdH4cRcoo1iNOnXwnuAdS+7MuwJ8BmmIHYcfU1E5c9MACqefExDpZ+PJR940dkwAh4rWarIM+zLEODjlC6K8YWKPfBamCAdMvLsKsT8VoazofLbUneLWVwn2imbaa30xUHKLZVicHvAPurC5NUSjPfU0sPxZyW846Z57lxbSjRnBxuyj4DFvbfKu6kb1FZUNW4KvtZM4kRE0cSWsmxIZ5LyyluyywFFnEAW49LiKms9kO+LhQIZSjkwJnhvhpmZ1hg2PtuQ5G4OtYovsZq4kix2wDaE53cX1LN4z7I3dflJKEd5xbygD3zUC6kTcO8HHiQ8GKuSZRGvCJXmbsEEoX43nxySovM8AZKlKbmJrGSc4487Rj6WpVpGR8iK3X6SDAoCc7Uews8d47y7OdlrHMfEm1/bZe3INAe/2jzfkjtvre3tXfxuKf5uZ/Dx+QPfXQz01YSqZQAAAAASUVORK5CYII=";

var g_radiologowhite = "hhcjs";

var g_playimg = g_pause_white;
var g_pauseimg = g_pause_white;
var g_soundimg = g_sound_white;

var rad_plogo = g_radiologo;

if (rad_logo=='black'){
	rad_plogo = g_radiologowhite;
	g_playimg = g_play_white;
	g_pauseimg = g_pause_white;
	g_soundimg = g_sound_white;
	g_text_color = '#ffffff';
}else{
	rad_plogo = g_radiologo;
	g_playimg = g_play_black;
	g_pauseimg = g_pause_black;
	g_soundimg = g_sound_black;
	g_text_color = '#2c2c2c';
}

	
var block_play = '<div id="rad_block_play"><img src="'+g_playimg+'" id="rad_play_btn" onclick="rad_playstop(); return false;" align="absmiddle"></div>';
	
if (rad_stations[0][2]!=undefined){
	var img = rad_stations[0][2];
}else{
	var img = 'noradio';
}


var select = '<div style="color: '+g_text_color+';" onclick="return rad_show_stations();" id="rad_select" align="left"><div id="rad_stationname">' + '<img src="https://radiobells.com/stations/' + img +'_70.jpg" align="absmiddle" id="rad_select_main_image"><span id="rad_select_main_text">' + rad_stations[0][1] + '</span></div><div id="rad_dropdown"></div></div>';
	select += '<div id="rad_list" style="display: none;" align="left">';

	for (var i=0; i<rad_stations.length; i++){
		if (rad_stations[i][2]!=undefined){
			var img = rad_stations[i][2];
		}else{
			var img = 'noradio';
		}
		select += '<div data-url="' + rad_stations[i][0] + '" data-img="' + img + '" align="left" onclick="return rad_selectthis(this);" onmouseover="this.style.backgroundColor = \'#434242\'" onmouseout="this.style.backgroundColor = \'#2c2c2c\'" class="rad_selection">';

		if (rad_stations[i][2]!=undefined){
	        select += '<img src="https://radiobells.com/stations/' +rad_stations[i][2] +'_70.jpg" class="rad_select_small_image" align="absmiddle">';
	    }else{
	    	select += '<img src="https://radiobells.com/stations/noradio_70.jpg" class="rad_select_small_image" align="absmiddle">';
	    }
	    select += rad_stations[i][1] + '</div>'
	}
	select += '</div>';

var block_select = '<div id="rad_block_select">'+select+'</div>';

var block_volume = '<div id="rad_block_volume"><img src="'+g_soundimg+'" id="rad_sound_btn" onclick="rad_show_volume(); return false;" align="absmiddle">'+
	'<div id="rad_volume" style="display: none;" align="left">' +
		'<div id="rad_volume_range" onmousemove="volumemove(event);"><div style="height: '+g_volume+'px; " id="rad_volume_bar"></div></div>'+
	'</div>'+
	'</div>';

var block_logo = '<div id="rad_block_logo" align="center"><a href="" target="_blank" title="hhcjs"><img src="'+rad_plogo+'" border="0" id="rad_logo" alt="hhcjs"></a></div>';

if (rad_width == 'responsive'){
	var style_rad_width = '100%';
}else{
	var style_rad_width = g_rad_width_px+'px';
}


document.getElementById('radiobells_container').innerHTML = '<div style="background-color: '+rad_backcolor+'; width: '+style_rad_width+';" id="rad_player"><div style="height: 28px;">' + block_play + block_select + block_volume + block_logo +'</div></div>';

var g_rad_player_width = document.getElementById("rad_player").clientWidth;

if (g_rad_player_width<=430){
    document.getElementById('rad_player').style.height = '100px';
    document.getElementById('rad_block_logo').style.width = '100%';
    document.getElementById('rad_block_logo').style.borderTop = '1px solid #222';
    document.getElementById('rad_block_logo').style.marginLeft = '0px';
    document.getElementById('rad_block_logo').style.marginTop = '0px';
    document.getElementById('rad_block_logo').style.paddingTop = '4px';
}else{
    document.getElementById('rad_player').style.height = '100px';
    document.getElementById('rad_block_logo').style.width = 'inherit';
    document.getElementById('rad_block_logo').style.borderTop = 'none';
    document.getElementById('rad_block_logo').style.marginLeft = '50px';
    document.getElementById('rad_block_logo').style.marginTop = '12px';
    document.getElementById('rad_block_logo').style.paddingTop = '0px';
}

if (g_rad_player_width<=300){
    document.getElementById('rad_select_main_text').style.display = 'none';
    document.getElementById('rad_stationname').style.width = '100px';
    document.getElementById('rad_select').style.width = '80px';
    document.getElementById('rad_block_play').style.marginRight = '0px';
    document.getElementById('rad_list').style.marginLeft = '-52px';
    document.getElementById('rad_block_volume').style.marginRight = '0px';
    document.getElementById('rad_block_volume').style.marginLeft = '0px';
}else{
    document.getElementById('rad_select_main_text').style.display = 'inline-block';
    document.getElementById('rad_stationname').style.width = '270px';
    document.getElementById('rad_select').style.width = '179px';
    document.getElementById('rad_block_play').style.marginRight = '10px';
    document.getElementById('rad_list').style.marginLeft = '9px';
    document.getElementById('rad_block_volume').style.marginRight = '10px';
    document.getElementById('rad_block_volume').style.marginLeft = '4px';
}

var g_audio = document.createElement('audio');
	
document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		if (rad_autoplay){
			rad_loadmusic();
		}
	}
}

function rad_selectthis(t){
	document.getElementById('rad_list').style.display='none';
	g_link = t.getAttribute('data-url');
	document.getElementById('rad_select_main_text').innerHTML = t.innerText;
    document.getElementById('rad_select_main_image').setAttribute('src','https://radiobells.com/stations/'+t.getAttribute('data-img')+'_70.jpg');
	rad_loadmusic();
	return false;
}

function rad_show_stations(){
  	var win_height = document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;

  	if (win_height - document.getElementById('rad_player').getBoundingClientRect().bottom > 220){
  		document.getElementById('rad_list').style.marginTop='48px';
  	}else{
  		document.getElementById('rad_list').style.marginTop='-'+(rad_stations.length*35)+'px';
  	}


	if (document.getElementById('rad_list').style.display=='none'){
		document.getElementById('rad_list').style.display='block';
	}else{
		document.getElementById('rad_list').style.display='none';
	}
	return false;
}

function rad_show_volume(){
	console.log(1);
	var win_height = document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;

  	if (win_height - document.getElementById('rad_player').getBoundingClientRect().bottom > 220){
  		g_volume_position = "bottom";
  		document.getElementById('rad_volume').style.marginTop='12px';
  		document.getElementById('rad_volume_range').style.verticalAlign='top';
  	}else{
  		g_volume_position = "top";
  		document.getElementById('rad_volume').style.marginTop='-164px';
  		document.getElementById('rad_volume_range').style.verticalAlign='bottom';
  	}


	if (document.getElementById('rad_volume').style.display=='none'){
		document.getElementById('rad_volume').style.display='block';
	}else{
		document.getElementById('rad_volume').style.display='none';
	}
	return false;
}

function rad_loadmusic(){
	g_audio.src = g_link;
	g_audio.volume = g_volume/100;
	g_audio.play();
	is_play = true;
	document.getElementById('rad_play_btn').src = g_pauseimg;
}

function rad_playstop(){
	if (is_play){
		g_audio.pause();
		document.getElementById('rad_play_btn').src = g_playimg;
		is_play = false;
	}else{
		g_audio.src = g_link;
		g_audio.volume = g_volume/100;
		g_audio.play();
		document.getElementById('rad_play_btn').src = g_pauseimg;
		is_play = true;
	}
}

var g_volume_position = "top";

function volumemove(event){
	if (g_volume_position == "bottom"){
		var top = document.getElementById("rad_volume_range").getBoundingClientRect().top;
		if(window.event)
			event = window.event;
		var mousey = event.clientY - top;
		var newvol = Math.floor(mousey);
	}else{
		var bottom = document.getElementById("rad_volume_range").getBoundingClientRect().bottom;
		if(window.event)
			event = window.event;
		var mousey = bottom - event.clientY;
		var newvol = Math.floor(mousey);
	}
	document.getElementById("rad_volume_bar").style.height = newvol+'px';
	g_volume = newvol;
	g_audio.volume = g_volume/100;
}

v2:~(|template @Grid (|#<`width`>30 #<`height`>20 (|<`grid`>|) &(|<`:init`>~(_let @makerow &(|~(_let @row (||)_) ~(_loop-over &(_~(_set @row ~(_cons #0 @row_)_)_) ~(_range @self.width_)_)|)_) ~(_let @grid (||)_) ~(_loop-over &(_~(_set @grid ~(_cons ~(_makerow _) @grid_)_)_) ~(_range @self.height_)_) ~(_set @self.grid @grid_)|)|)|)